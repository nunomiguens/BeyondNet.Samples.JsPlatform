import { inject } from 'inversify';
import { Request } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut } from 'inversify-express-utils';

import { UserRepository, RepositoryTypes } from '../repositories';
import { IResultModel } from '../models';
import { ResultHelper } from '../utils/helpers';

@controller('/users')
export class UserController {
    async defaultMethod(): Promise<IResultModel> {
        return await ResultHelper.Instance().NotFound(`You've reached the ${this.constructor.name} default method`);
    }

    constructor(@inject(RepositoryTypes.IRepository) private repository: UserRepository) {}

    @httpGet('/')
    async GetAll(): Promise<IResultModel> {
        return ResultHelper.Instance().Ok(await this.repository.GetAll());
    }

    @httpGet('/:id')
    async GetById(request: Request): Promise<IResultModel> {
        return ResultHelper.Instance().Ok(await this.repository.GetById(request.params.id));
    }

    @httpPost('/')
    async Add(request: Request): Promise<IResultModel> {
        return ResultHelper.Instance().Ok(await this.repository.Add(request.body));
    }

    @httpPut('/:id')
    async Update(request: Request): Promise<IResultModel> {
        return ResultHelper.Instance().Ok(await this.repository.Update(request.params.id, request.body));
    }

    @httpDelete('/:id')
    async Delete(request: Request): Promise<IResultModel> {
        return ResultHelper.Instance().Ok(await this.repository.Delete(request.params.id));
    }
}
