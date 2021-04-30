'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.IndexController = void 0;
const express_1 = require('express');
exports.IndexController = express_1.Router();
exports.IndexController.get('/', (req, res, next) =>
    __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.status(200).send({ data: 'Hello from Ornio AS!' });
        } catch (e) {
            next(e);
        }
    })
);
//# sourceMappingURL=IndexController.js.map
