import express from 'express';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import errorMiddleware from './middlewares/error.middleware';

import config from './config/default.json';

export default class appLauncher {
    private app: express.Application;
    private port: Number;
    private dbLink: String;

    constructor(controllers: any[]) {
        this.app = express();
        this.port = (<any>config).port;
        this.dbLink = (<any>config).mongodb.path;

        this.connectToDatabase();

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        })
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private connectToDatabase(){
        mongoose.connect(`${this.dbLink}`, { useNewUrlParser: true });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
};