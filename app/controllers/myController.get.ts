import * as express from 'express';
import myControllerModel from '../models/myController.model';
import HttpException from '../middlewares/HttpExceptions';

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

    private getAll = async(request: express.Request, response: express.Response, next: express.NextFunction): Promise<any> => {
        try {
            const listController = await this.myControllerModel.find();
            return response.send(listController);
        } catch(err) {
            next(new HttpException(404, 'No data found', 'NONE_ID'));
        }
    }

    private getById = async(request: express.Request, response: express.Response, next: express.NextFunction): Promise<any> => {
        const id = request.params.id;
        try {
            const controller = await this.myControllerModel.find({ _id: id});
            return response.send(controller);
        } catch(err) {
            next(new HttpException(404, 'Id user not found', 'ID_NOT_EXIST'));
        }
    }
}
