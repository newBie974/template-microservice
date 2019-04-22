import * as express from 'express';
import myInterfaces from '../interfaces/myController.interface';

export default class myControllerPost {
    private router = express.Router();
    private demo: myInterfaces[] =  [{
        id: 1,
        name: 'Blackwood',
    }];
    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/mycontroller', this.create);
    }

    create = (request: express.Request, response: express.Response) => {
        const post = request.body;
        this.demo.push(post);
        response.send(this.demo);
    }
}
