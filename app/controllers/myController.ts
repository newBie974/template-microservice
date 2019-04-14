import * as express from 'express';

export default class myController {
    public router = express.Router();
    public demo = [{
        name: 'Blackwood',
        id: 1
    }];
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get('/', this.getAll);
        this.router.post('/mycontroller', this.create);
    }

    getAll = (request: express.Request, response: express.Response) => {
        console.log(this.demo);
        response.send(this.demo);
    }

    create = (request: express.Request, response: express.Response) => {
        const post = request.body;
        this.demo.push(post);
        response.send(this.demo);
    }
}
