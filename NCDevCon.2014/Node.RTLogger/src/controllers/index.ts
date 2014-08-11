/// <reference path="../typings.d.ts" />
/// <reference path="../common/interfaces.d.ts" />

export function init(options : IInit){

    var configurationController = require('./configuration').configurationController;
    var connectionsController = require('./connections').connectionsController;
    var logController = require('./logs').logController;
    var viewController = require('./views').viewController;

    configurationController.init(options);
    connectionsController.init(options);
    logController.init(options);
    viewController.init(options);
}
