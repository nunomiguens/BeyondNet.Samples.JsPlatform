'use strict';
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
            d;
        if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
var __metadata =
    (this && this.__metadata) ||
    function (k, v) {
        if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
    };
var __param =
    (this && this.__param) ||
    function (paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserRepository = void 0;
const inversify_1 = require('inversify');
require('reflect-metadata');
const mdbclient_helper_1 = require('../utils/helpers/mongodb/mdbclient-helper');
const helpers_1 = require('../utils/helpers');
let UserRepository = class UserRepository {
    constructor(client) {
        this.mongoDbClient = client;
    }
    GetAll() {
        return new Promise((resolve) => {
            this.mongoDbClient.find('user', {}, (error, data) => {
                resolve(data);
            });
        });
    }
    GetById(id) {
        return new Promise((resolve) => {
            this.mongoDbClient.findOneById('user', id, (error, data) => {
                resolve(data);
            });
        });
    }
    Add(entity) {
        return new Promise((resolve) => {
            this.mongoDbClient.insert('user', entity, (error, data) => {
                resolve(data);
            });
        });
    }
    Update(id, entity) {
        return new Promise((resolve) => {
            this.mongoDbClient.update('user', id, entity, (error, data) => {
                resolve(data);
            });
        });
    }
    Delete(id) {
        return new Promise((resolve) => {
            this.mongoDbClient.remove('user', id, (error, data) => {
                resolve(data);
            });
        });
    }
};
UserRepository = __decorate(
    [
        inversify_1.injectable(),
        __param(0, inversify_1.inject(helpers_1.HelperTypes.MongoDBClient)),
        __metadata('design:paramtypes', [mdbclient_helper_1.MongoDBClient]),
    ],
    UserRepository,
);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map
