/**
 * Created by ankit on 26/11/16.
 */

'use strict';

module.exports = function (config,express,bodyParser,cookieParser,morgan,compression,async) {

    var app = express();

    function parallel(middlewares) {
        return function (req, res, next) {
            async.each(middlewares, function (mw, cb) {
                mw(req, res, cb);
            }, next);
        };
    }


    //Adding middleware
    app.use(parallel([
        bodyParser.urlencoded({
            extended: true
        }),
        bodyParser.json(),
        express.static(config.staticFolder),
        cookieParser(),
        morgan('dev'),
        compression()
    ]));

    require('./route.js')(app, async);

    return app;
};