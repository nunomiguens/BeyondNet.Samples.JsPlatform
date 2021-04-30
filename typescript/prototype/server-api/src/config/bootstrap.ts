import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import 'reflect-metadata';

import { MongoDBClient } from '../utils/helpers/mongodb/mdbclient-helper';
import { UserModel } from './../models';
import { UserRepository, RepositoryTypes, IRepository } from '../repositories';
import { HelperTypes } from '../utils/helpers';

const container = new Container();

if (process.env.NODE_ENV === 'development') {
    container.applyMiddleware(makeLoggerMiddleware());
}

container.bind<MongoDBClient<UserModel>>(HelperTypes.MongoDBClient).to(MongoDBClient);
container.bind<IRepository<UserModel>>(RepositoryTypes.IRepository).to(UserRepository);

export default container;
