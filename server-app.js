/**
 * Created by ankit on 26/11/16.
 */

'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
    boot = require('./app/boot'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    compression = require('compression'),
    async = require('async'),
    express = require('express');

var app = boot(config,express,bodyParser,cookieParser,morgan,compression,async);

app.listen(config.port);

console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);