function init(options) {
    var configurationController = require('./configuration').configurationController;
    var connectionsController = require('./connections').connectionsController;
    var logController = require('./logs').logController;
    var viewController = require('./views').viewController;

    configurationController.init(options);
    connectionsController.init(options);
    logController.init(options);
    viewController.init(options);
}
exports.init = init;
