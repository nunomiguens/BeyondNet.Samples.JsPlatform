'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.routes = void 0;
const PingController_1 = require('./controllers/PingController');
const IndexController_1 = require('./controllers/IndexController');
const _routes = [
    ['/', IndexController_1.IndexController],
    ['/ping', PingController_1.PingController],
];
const routes = (app) => {
    _routes.forEach((route) => {
        const [url, controller] = route;
        app.use(url, controller);
    });
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map
