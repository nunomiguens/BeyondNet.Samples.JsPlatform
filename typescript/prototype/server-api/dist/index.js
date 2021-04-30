'use strict';
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                  enumerable: true,
                  get: function () {
                      return m[k];
                  },
              });
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', { enumerable: true, value: v });
          }
        : function (o, v) {
              o['default'] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
const bodyParser = __importStar(require('body-parser'));
const path_1 = __importDefault(require('path'));
const helmet_1 = __importDefault(require('helmet'));
const cookie_parser_1 = __importDefault(require('cookie-parser'));
const express_fileupload_1 = __importDefault(require('express-fileupload'));
const express_mongo_sanitize_1 = __importDefault(require('express-mongo-sanitize'));
const express_rate_limit_1 = __importDefault(require('express-rate-limit'));
const hpp_1 = __importDefault(require('hpp'));
require('reflect-metadata');
const cors_handler_1 = __importDefault(require('./middlewares/cors-handler'));
const error_handler_1 = __importDefault(require('./models/shared/error-handler'));
const inversify_express_utils_1 = require('inversify-express-utils');
const bootstrap_1 = __importDefault(require('./config/bootstrap'));
require('./controllers/user-controller');
dotenv_1.default.config({
    path: '.env',
});
class Server {
    constructor() {
        const port = process.env.PORT || 5001;
        if (process.env.NODE_ENV === 'dev') {
            // TODO: Add development configs
        }
        this.server = new inversify_express_utils_1.InversifyExpressServer(bootstrap_1.default);
        this.server.setConfig((app) => {
            app.use(
                bodyParser.urlencoded({
                    extended: true,
                }),
            );
            this.configureMiddlewares(app);
        });
        const app = this.server.build();
        app.listen(port, () => console.log(`Server is listening on port ${port}!`));
    }
    configureMiddlewares(app) {
        app.use(express_1.default.json());
        app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
        app.use(express_fileupload_1.default({ limits: { fileSize: 50 * 1024 * 1024 } }));
        app.use(cookie_parser_1.default());
        // Sanitize data
        app.use(express_mongo_sanitize_1.default());
        // Set security headers
        app.use(helmet_1.default());
        // Rate limiting
        const limiter = express_rate_limit_1.default({
            windowMs: 10 * 60 * 1000,
            max: 100,
        });
        app.use(limiter);
        // Prevent http param pollution
        app.use(hpp_1.default());
        // Cors
        app.use(cors_handler_1.default);
        app.use(error_handler_1.default);
    }
}
exports = module.exports = new Server();
//# sourceMappingURL=index.js.map
