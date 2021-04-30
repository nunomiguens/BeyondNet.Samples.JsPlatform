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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.MongoDBClient = void 0;
const mongodb_1 = require('mongodb');
const inversify_1 = require('inversify');
require('reflect-metadata');
const mdbconnection_helper_1 = __importDefault(require('./mdbconnection-helper'));
let MongoDBClient = class MongoDBClient {
    constructor() {
        mdbconnection_helper_1.default.getConnection((connection) => {
            this.db = connection;
        });
    }
    find(collection, filter, result) {
        this.db
            .collection(collection)
            .find(filter)
            .toArray((error, find) => {
                return result(error, find);
            });
    }
    findOneById(collection, objectId, result) {
        const id = new mongodb_1.ObjectID(objectId);
        this.db
            .collection(collection)
            .find({ _id: id })
            .limit(1)
            .toArray((error, find) => {
                return result(error, find[0]);
            });
    }
    insert(collection, model, result) {
        this.db.collection(collection).insertOne(model, (error, insert) => {
            return result(error, insert.ops[0]);
        });
    }
    update(collection, objectId, model, result) {
        this.db
            .collection(collection)
            .updateOne({ _id: new mongodb_1.ObjectID(objectId) }, { $set: model }, (error) => result(error, model));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    remove(collection, objectId, result) {
        this.db.collection(collection).deleteOne({ _id: new mongodb_1.ObjectID(objectId) }, (error, remove) => {
            return result(error, remove);
        });
    }
};
MongoDBClient = __decorate([inversify_1.injectable(), __metadata('design:paramtypes', [])], MongoDBClient);
exports.MongoDBClient = MongoDBClient;
//# sourceMappingURL=mdbclient-helper.js.map
