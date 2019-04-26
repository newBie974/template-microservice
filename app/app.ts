import express from 'express';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

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
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        })
    }

    private connectToDatabase(){
        mongoose.connect(`${this.dbLink}`);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
};