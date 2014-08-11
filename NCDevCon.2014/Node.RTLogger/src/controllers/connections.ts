export module connectionsController{
    var ioPointer;

    export function init(options : IInit){

        ioPointer = options.socketIo;

        ioPointer.sockets.on('connection', (socket) => {
            console.log('New Connection ' + socket.id);
        });

    }
}