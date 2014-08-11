(function (logController) {
    var appPointer;
    var ioPointer;
    var cache;

    function init(options) {
        appPointer = options.expressApp;
        ioPointer = options.socketIo;

        console.log('[Log Controller] Init was called');

        appPointer.post('/api/log', postMessage);
        appPointer.get('/api/logs/:sessionId', getMessageForId);
    }
    logController.init = init;

    function getMessageForId(req, res) {
        if (appPointer.isDebug) {
            console.log('Get Message Receieved');
            console.log(req.body);
        }

        var session = null;

        console.log(session);
        res.send(200, session);
    }

    function postMessage(req, res) {
        if (appPointer.isDebug) {
            console.log('Post Message Receieved');
            console.log(req.body);
        }

        var message = req.body;

        var isBodyValid = isValidMessage(message);

        if (isBodyValid) {
            cache.appendToSession(message);

            res.send(200);
        } else {
            console.log("[Log Controller] - Bad Formed Message: " + JSON.stringify(req.body));
            res.send(400, { error: 'The log request was badly formed' });
        }
    }

    function isValidMessage(message) {
    }
})(exports.logController || (exports.logController = {}));
var logController = exports.logController;
