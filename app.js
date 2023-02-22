const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/db');
const Users = require('./src/models/Users');
const Task_List = require('./src/models/Task_List');
const Task = require('./src/models/Task');
const app = express();
const { json } = require('express');
const port = 1000;




app.use(bodyParser.json());



//GET
require ('./src/path/get/Users_Get')(app, Task_List , Task , Users );
require('./src/path/get/TaskList_Get')(app, Task_List , Task , Users );
require('./src/path/get/Task_Get')(app, Task_List , Task , Users );
// require('./src/path/test/test')(app);

//ADD
require('./src/path/add/User_Add')(app, Task_List , Task , Users );
require('./src/path/add/TaskList_Add')(app, Task_List , Task , Users );
require('./src/path/add/Task_Add')(app, Task_List , Task , Users );
require('./src/path/add/login')(app, Users);

//DELETE
require('./src/path/delete/User_Dlt')(app, Task_List , Task , Users );
require('./src/path/delete/TaskList_Dlt')(app, Task_List , Task , Users );
require('./src/path/delete/Task_Dlt')(app, Task_List , Task , Users );

//UPDATE
require('./src/path/put/User_Put')(app, Task_List , Task , Users );
require('./src/path/put/TaskList_Put')(app, Task_List , Task , Users );
require('./src/path/put/Task_Put')(app, Task_List , Task , Users );


app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}.`);
});