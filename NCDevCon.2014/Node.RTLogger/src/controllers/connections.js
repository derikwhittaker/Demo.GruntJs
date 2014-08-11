(function (connectionsController) {
    var ioPointer;

    function init(options) {
        ioPointer = options.socketIo;

        ioPointer.sockets.on('connection', function (socket) {
            console.log('New Connection ' + socket.id);
        });
    }
    connectionsController.init = init;
})(exports.connectionsController || (exports.connectionsController = {}));
var connectionsController = exports.connectionsController;
