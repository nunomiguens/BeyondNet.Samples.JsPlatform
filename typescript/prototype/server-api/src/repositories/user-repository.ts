import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { MongoDBClient } from '../utils/helpers/mongodb/mdbclient-helper';
import { IRepository } from './shared/repository';
import { UserModel } from '../models';
import { HelperTypes } from '../utils/helpers';

@injectable()
export class UserRepository implements IRepository<UserModel> {
    private mongoDbClient: MongoDBClient<UserModel>;

    constructor(@inject(HelperTypes.MongoDBClient) client: MongoDBClient<UserModel>) {
        this.mongoDbClient = client;
    }

    GetAll(): Promise<UserModel[]> {
        return new Promise<UserModel[]>((resolve) => {
            this.mongoDbClient.find('users', {}, (error, data: UserModel[]) => {
                resolve(data);
            });
        });
    }

    GetById(id: string): Promise<UserModel> {
        return new Promise<UserModel>((resolve) => {
            this.mongoDbClient.findOneById('users', id, (error, data: UserModel) => {
                resolve(data);
            });
        });
    }

    Add(entity: UserModel): Promise<UserModel> {
        return new Promise<UserModel>((resolve) => {
            this.mongoDbClient.insert('users', entity, (error, data: UserModel) => {
                resolve(data);
            });
        });
    }

    Update(id: string, entity: UserModel): Promise<UserModel> {
        return new Promise<UserModel>((resolve) => {
            this.mongoDbClient.update('users', id, entity, (error, data: UserModel) => {
                resolve(data);
            });
        });
    }

    Delete(id: string): Promise<UserModel> {
        return new Promise<UserModel>((resolve) => {
            this.mongoDbClient.remove('users', id, (error, data: UserModel) => {
                resolve(data);
            });
        });
    }
}
