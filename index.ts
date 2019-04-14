'use strict';
// Require app Launcher
import appLauncher from './app/app';
import myController from './app/controllers/myController';
// Instantiate appLauncher
const app = new appLauncher(
    [ 
        new myController() 
    ], 
    3030
);

app.listen();
