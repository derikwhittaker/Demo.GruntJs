/// <reference path="./typings.d.ts" />

import express = require('express');
import socketIo = require('socket.io');
import controllers = require('./controllers/index');

var port = process.env.port || 1337;
var app = express();

var server = app.listen(port, function () {
    console.log('Listening on port %d....', server.address().port);
});

var io = socketIo.listen(server);

controllers.init({
    expressApp: app,
    express: express,
    socketIo: io,
    baseDir: __dirname,
    isDebug: true
});
