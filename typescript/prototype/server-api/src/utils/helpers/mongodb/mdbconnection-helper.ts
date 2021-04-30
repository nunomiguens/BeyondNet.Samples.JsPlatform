import { Db, MongoClient } from 'mongodb';

class MongoDbConnection {
    private static db: Db;
    private static isConnected = false;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public static getConnection(result: (connection: Db) => void): void {
        if (this.isConnected) {
            return result(this.db);
        } else {
            this.connect((error, db: Db) => {
                return result(db);
            });
        }
    }

    private static connect(result: (error: Error, db: Db) => void) {
        const connStr = process.env.DB_CONNSTR || 'mongodb://localhost:27017';
        const dbName = process.env.DB_NAME;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        MongoClient.connect(connStr, options, (err, client) => {
            this.db = client.db(dbName);
            this.isConnected = true;
            return result(err, this.db);
        });
    }
}

export default MongoDbConnection;
