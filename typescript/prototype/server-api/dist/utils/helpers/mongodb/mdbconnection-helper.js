'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const mongodb_1 = require('mongodb');
class MongoDbConnection {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static getConnection(result) {
        if (this.isConnected) {
            return result(this.db);
        } else {
            this.connect((error, db) => {
                return result(db);
            });
        }
    }
    static connect(result) {
        const connStr = process.env.DB_CONNSTR || 'mongodb://localhost:27017';
        const dbName = process.env.DB_NAME;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        mongodb_1.MongoClient.connect(connStr, options, (err, client) => {
            this.db = client.db(dbName);
            this.isConnected = true;
            return result(err, this.db);
        });
    }
}
MongoDbConnection.isConnected = false;
exports.default = MongoDbConnection;
//# sourceMappingURL=mdbconnection-helper.js.map
