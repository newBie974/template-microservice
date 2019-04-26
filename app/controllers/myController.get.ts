import * as express from 'express';
import myInterfaces from '../interfaces/myController.interface';
import myControllerModel from '../models/myController.model';

export default class myControllerGet {
    private router = express.Router();
    private demo: myInterfaces[] =  [{
        id: 1,
        name: 'Blackwood',
    }];
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getAll);
    }

    getAll = (request: express.Request, response: express.Response) => {
        myControllerModel.find()
            .then((res) => {
                response.send(res);
            })
            .catch((err) => {
                response.send(err);
            })
    }
}
