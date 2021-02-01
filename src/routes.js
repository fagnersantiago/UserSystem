const  express = require('express');
const SessionController = require("./controllers/SessionController");
const UserController = require("./controllers/UserController");
const DashboarController = require("./controllers/DashboradController");
const PreRegisterController = require("./controllers/PreRegisterController");
const routes = express.Router();

routes.get('/', DashboarController.index);

routes.get('/search', DashboarController.show);

routes.post('/Session', SessionController.store);

routes.post('/admin/pre-register', PreRegisterController.store);

routes.post('/admin/pre-register/register', UserController.store);


module.exports = routes;