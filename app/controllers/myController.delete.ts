import * as express from 'express';
import myInterfaces from '../interfaces/myController.interface';

export default class myControllerDelete {
    private router = express.Router();
    private demo: myInterfaces[] =  [{
        id: 1,
        name: 'Blackwood',
    }];
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/:id', this.delete);
    }

    delete = (request: express.Request, response: express.Response) => {
        response.send(this.demo);
    }
}
