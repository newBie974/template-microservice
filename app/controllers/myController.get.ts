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
        this.router.get('/:id', this.getById);
    }

    private getAll = async(request: express.Request, response: express.Response): Promise<express.Response> => {
        try {
            const listController = await this.myControllerModel.find();
            return response.send(listController);
        } catch(err) {
            return response.send({ status: 404 });
        }
    }

    private getById = async(request: express.Request, response: express.Response, next: express.NextFunction): Promise<express.Response> => {
        const id = request.params.id;
        try {
            const controller = await this.myControllerModel.find({ _id: id});
            return response.send(controller);
        } catch(err) {
            return response.status(404).send({ msg: 'no id found', code: 'NO_CONTROLLER_FOUND', err: err });
        }
    }
}
