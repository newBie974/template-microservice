import express = require('express');
// Create application express
const app: express.Application = express();



export default class appLauncher {
    constructor() {
        app.get('/', (req, res) => {
            res.send('Hello World');
        });

        app.listen(3000, () => {
            console.log('I am listening 3000 ! ');
        });
    }
};