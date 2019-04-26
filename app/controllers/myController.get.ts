import * as express from 'express';
import myControllerModel from '../models/myController.model';

export default class myControllerGet {
    private router = express.Router();
    private myControllerModel = myControllerModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getAll);
    }

    private getAll = async (request: express.Request, response: express.Response): Promise<express.Response> => {
        try {
            const listController = await this.myControllerModel.find();
            return response.send(listController);
        } catch(err) {
            return response.send({ status: 404 });
        }
    }
}
