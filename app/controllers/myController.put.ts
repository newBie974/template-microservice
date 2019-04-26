import * as express from 'express';
import myControllerModel from '../models/myController.model';

import myInterfaces from '../interfaces/myController.interface';

export default class myControllerPut {
    private router = express.Router();
    private myControllerModel = myControllerModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.put('/:id', this.update);
    }

    update = (request: express.Request, response: express.Response) => {
       const id = request.params.id;
       const updateData: myInterfaces = request.body;
       myControllerModel.findOneAndUpdate({_id: id}, updateData, { new: true })
        .then((res) => {
            response.send(res);
        })
        .catch((err) => {
            response.send(err);
        })
    }
}
