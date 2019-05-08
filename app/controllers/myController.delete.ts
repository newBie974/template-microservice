import * as express from 'express';
import myControllerModel from '../models/myController.model';

import myInterfaces from '../interfaces/myController.interface';

export default class myControllerDelete {
    private router = express.Router();
    private myControllerModel = myControllerModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/:id', this.delete);
    }

    delete = (request: express.Request, response: express.Response) => {
        const id = request.params.id;
        this.myControllerModel.deleteOne({ _id: id })
          .then((res) => {
            response.send(res);
          })
          .catch((err) => {
            response.send(err);
          })
    }
}
