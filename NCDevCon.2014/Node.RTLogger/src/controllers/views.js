(function (viewController) {
    var appPointer;

    function init(options) {
        console.log('[View Controller] Init was called');
        appPointer = options.expressApp;

        appPointer.get("/", getHome);
    }
    viewController.init = init;

    function getHome(req, resp) {
        resp.render('index.html');
    }
})(exports.viewController || (exports.viewController = {}));
var viewController = exports.viewController;
