/* jslint node: true */
'use strict';

var log4js = require('log4js');
var path = require('path');
var appRoot = require('app-root-path');

log4js.configure({
    "appenders": [
        {
            type: "console"
        },
        {
            "type": "file",
            "filename": path.join(appRoot, "logs/fooforms.log"),
            "maxLogSize": 1024,
            "backups": 1,
            "category": "fooforms"
        }
    ]
});
var logger = log4js.getLogger('fooforms');
logger.setLevel('DEBUG');
Object.defineProperty(exports, "LOG", {
    value: logger
});

exports.expressLogger = log4js.connectLogger(logger, { level: 'auto' });
