'use strict';
// Require app Launcher
import appLauncher from './app/app';
import Get from './app/controllers/myController.get';
import Post from './app/controllers/myController.post';
import Put from './app/controllers/myController.put';
import Delete from './app/controllers/myController.delete';


// Instantiate appLauncher
const app = new appLauncher(
    [ 
        new Get(),
        new Post(),
        new Put(),
        new Delete() 
    ]
);

app.listen();
