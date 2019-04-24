import * as express from 'express';
import myInterfaces from '../interfaces/myController.interface';

export default class myControllerPut {
    public router = express.Router();
    public demo: myInterfaces[] =  [{
        id: 1,
        name: 'Blackwood',
    }];
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.put('/:id', this.update);
    }

    update = (request: express.Request, response: express.Response) => {
        const updateData = this.demo.find(i => i.id == request.params.id);
        if(updateData)
            updateData.name = request.body.name;
        response.send(updateData);
    }
}
