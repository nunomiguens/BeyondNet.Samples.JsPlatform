import express, { Application } from 'express';
import dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import path from 'path';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import 'reflect-metadata';

import corsHandler from './middlewares/cors-handler';
import errorHandler from './models/shared/error-handler';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './config/bootstrap';
import './controllers/user-controller';

dotenv.config({
    path: '.env',
});

class Server {
    protected readonly server: InversifyExpressServer;
    private readonly port: string | number;

    constructor() {
        this.port = process.env.PORT || 5001;

        if (process.env.NODE_ENV === 'dev') {
            // REVIEW: Here, we can add specific development configurations
        }

        this.server = new InversifyExpressServer(container);

        this.server.setConfig((app) => {
            app.use(
                bodyParser.urlencoded({
                    extended: true,
                }),
            );
            this.configureMiddlewares(app);
        });

        const app = this.server.build();

        app.listen(this.port, () => console.log(`Server is listening on port ${this.port}!`));
    }

    private configureMiddlewares(app: Application): void {
        app.use(express.json());

        app.use(express.static(path.join(__dirname, 'dist')));

        app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));

        app.use(cookieParser());

        // Sanitize data
        app.use(mongoSanitize());

        // Set security headers
        app.use(helmet());

        // Rate limiting
        const limiter = rateLimit({
            windowMs: 10 * 60 * 1000, // 10 mins
            max: 100,
        });
        app.use(limiter);

        // Prevent http param pollution
        app.use(hpp());

        // Cors
        app.use(corsHandler);

        app.use(errorHandler);
    }
}

exports = module.exports = new Server();
