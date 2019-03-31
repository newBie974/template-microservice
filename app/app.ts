import express = require('express');
import errorHandler from './middlewares/error';
// Create application express
const app: express.Application = express();



export default class appLauncher {
    constructor() {
        const error = new errorHandler();
        app.get('/', (req, res) => {
            res.send('Hello World');
        });

        app.get('/coucou', (req, res) => {
            res.send('coucou');
        })
        app.listen(3000, () => {
            console.log('I am listening 3000 ! ');
        });
    }
};