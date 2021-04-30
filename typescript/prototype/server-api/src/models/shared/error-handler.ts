import { Request, Response, NextFunction } from 'express';
import ErrorModel from './error-model';

const errorHandler = (err: ErrorModel, req: Request, res: Response, next: NextFunction): void => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message,
    });
};

export default errorHandler;
