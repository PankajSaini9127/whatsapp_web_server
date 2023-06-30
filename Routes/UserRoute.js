import express from 'express';
import { add_user, get_user } from '../Controller/UserController.js';


const Router = express.Router();

Router.post('/add',add_user);

Router.get('/get-user',get_user)


export default Router;
