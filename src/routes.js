import express from 'express';
import SessionController from"./controllers/SessionController.js";
import UserController from "./controllers/UserController.js";
import DashboarController from "./controllers/DashboradController.js";
import PreRegisterController from "./controllers/PreRegisterController.js";


const  routes = express.Router();

routes.get('/', DashboarController.index);

routes.get('/search', DashboarController.show);

routes.post('/Session', SessionController.store);

routes.post('/admin/pre-register', PreRegisterController.store);

routes.post('/admin/pre-register/register', UserController.store);


export default routes;