import { Db, FilterQuery, ObjectID } from 'mongodb';
import { injectable } from 'inversify';
import 'reflect-metadata';
import MongoDbConnection from './mdbconnection-helper';

@injectable()
export class MongoDBClient<T> {
    private db!: Db;

    constructor() {
        MongoDbConnection.getConnection((connection: Db) => {
            this.db = connection;
        });
    }

    public find(collection: string, filter: FilterQuery<T>, result: (error: Error, data: T[]) => void): void {
        this.db
            .collection(collection)
            .find(filter)
            .toArray((error, find) => {
                return result(error, find);
            });
    }

    public findOneById(collection: string, objectId: string, result: (error: Error, data: T) => void): void {
        this.db
            .collection(collection)
            .find({ _id: new ObjectID(objectId) })
            .limit(1)
            .toArray((error, find) => {
                return result(error, find[0]);
            });
    }

    public insert(collection: string, model: T, result: (error: Error, data: T) => void): void {
        this.db.collection(collection).insertOne(model, (error, insert) => {
            return result(error, insert.ops[0]);
        });
    }

    public update(collection: string, objectId: string, model: T, result: (error: Error, data: T) => void): void {
        this.db
            .collection(collection)
            .updateOne({ _id: new ObjectID(objectId) }, { $set: model }, (error) => result(error, model));
    }

    // REVIEW: The data parameter is broken the Lint rule "do not use ANY type". Because we need to receive
    // explicitly any object. That's why we are omitting the following lint command:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public remove(collection: string, objectId: string, result: (error: Error, data: any) => void): void {
        this.db.collection(collection).deleteOne({ _id: new ObjectID(objectId) }, (error, remove) => {
            return result(error, remove);
        });
    }
}
