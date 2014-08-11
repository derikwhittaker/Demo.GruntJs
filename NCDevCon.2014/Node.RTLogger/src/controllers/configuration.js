var bodyParser = require('body-parser');

(function (configurationController) {
    function init(options) {
        console.log('[Configuration Controller] Init was called');

        setupExpress(options);
    }
    configurationController.init = init;

    function setupExpress(options) {
        validateOptions(options);

        var expressApp = options.expressApp;

        expressApp.use(bodyParser.urlencoded({ extended: false }));
        expressApp.use(bodyParser.json());

        expressApp.use(function (err, req, res, next) {
            if (!err) {
                return next();
            }
            console.log("error!!!");
            res.send("error!!!");
        });

        expressApp.set('views', options.baseDir + '/app');
        expressApp.engine('html', require('ejs').renderFile);

        expressApp.use('/css', options.express.static(options.baseDir + '/app/css'));
        expressApp.use('/app', options.express.static(options.baseDir + '/app'));
        expressApp.use('/js', options.express.static(options.baseDir + '/app/js'));
        expressApp.use('/ctrl', options.express.static(options.baseDir + '/app/controllers'));

        expressApp.use('/src', options.express.static(options.baseDir + '/bower_components'));

        expressApp.isDebug = options.isDebug || false;
    }

    function validateOptions(options) {
        if (!options.expressApp) {
            throw new Error("Options.app is required for Configurations.init");
        }

        if (!options.express) {
            throw new Error("Options.express is required for Configurations.init");
        }

        if (!options.baseDir) {
            throw new Error("Options.baseDir is required for Configurations.init");
        }
    }
})(exports.configurationController || (exports.configurationController = {}));
var configurationController = exports.configurationController;
