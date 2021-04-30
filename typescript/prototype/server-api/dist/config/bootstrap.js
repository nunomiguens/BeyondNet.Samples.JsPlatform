'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const inversify_1 = require('inversify');
const inversify_logger_middleware_1 = require('inversify-logger-middleware');
require('reflect-metadata');
const mdbclient_helper_1 = require('../utils/helpers/mongodb/mdbclient-helper');
const repositories_1 = require('../repositories');
const helpers_1 = require('../utils/helpers');
const container = new inversify_1.Container();
if (process.env.NODE_ENV === 'development') {
    const logger = inversify_logger_middleware_1.makeLoggerMiddleware();
    container.applyMiddleware(logger);
}
container.bind(helpers_1.HelperTypes.MongoDBClient).to(mdbclient_helper_1.MongoDBClient);
container.bind(repositories_1.RepositoryTypes.IRepository).to(repositories_1.UserRepository);
exports.default = container;
//# sourceMappingURL=bootstrap.js.map
