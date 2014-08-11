/**
 * Created by Derik on 8/11/2014.
 */

/// <reference path="../typings.d.ts" />

export module logController{

    var appPointer;
    var ioPointer;
    var cache;

    export function init(options : IInit){
        appPointer = options.expressApp;
        ioPointer = options.socketIo;

        console.log('[Log Controller] Init was called');

        appPointer.post('/api/log', postMessage);
        appPointer.get('/api/logs/:sessionId', getMessageForId);
    }

    function getMessageForId(req, res){
        if (appPointer.isDebug) {
            console.log('Get Message Receieved');
            console.log(req.body);
        }

        //var sessionId = req.params.sessionId;

        var session = null;// cache.getSession({sessionId: sessionId});


        console.log(session);
        res.send(200, session);
    }

    function postMessage(req, res){
        if (appPointer.isDebug) {
            console.log('Post Message Receieved');
            console.log(req.body);
        }

        var message = req.body;

        var isBodyValid = isValidMessage(message);

        if (isBodyValid) {
            cache.appendToSession(message);
            // put into backing cache

            // broadcast to listeners
            res.send(200);
        } else {
            console.log("[Log Controller] - Bad Formed Message: " + JSON.stringify( req.body));
            res.send(400, { error: 'The log request was badly formed' });
        }

    }

    function isValidMessage(message) {

//        var isValidShell = message !== undefined &&
//            message.id !== undefined &&
//            message.sessionId !== undefined;
//
//        var body = isValidShell ? message.body : undefined;
//        var platform = isValidShell ? message.platform : undefined;
//
//        var isValidBody = body !== undefined &&
//            body.severity !== undefined &&
//            body.category !== undefined &&
//            body.message !== undefined ;
//
//        var isValidPlatform = platform !== undefined &&
//            platform.name !== undefined &&
//            platform.type !== undefined &&
//            platform.id !== undefined;
//
//        return isValidShell && isValidBody & isValidPlatform;
    }
}

