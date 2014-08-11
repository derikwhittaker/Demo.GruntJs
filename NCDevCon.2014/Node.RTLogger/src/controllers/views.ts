/// <reference path="../typings.d.ts" />

export module viewController{

    var appPointer;

    export function init(options : IInit){
        console.log('[View Controller] Init was called');
        appPointer = options.expressApp;

        appPointer.get("/", getHome);
    }

    function getHome(req, resp){
        resp.render('index.html');
    }
}