'use strict';
import config from './config/default.json';
// Require app Launcher
import appLauncher from './app/app';
import Get from './app/controllers/myController.get';
import Post from './app/controllers/myController.post';
import Put from './app/controllers/myController.put';
import Delete from './app/controllers/myController.delete';

const PORT = (<any>config).port;
// Instantiate appLauncher
const app = new appLauncher(
    [ 
        new Get(),
        new Post(),
        new Put(),
        new Delete() 
    ], 
    PORT
);

app.listen();
