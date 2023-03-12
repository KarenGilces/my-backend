import express from 'express';
import { getUsers,createUsers,updateUsers,deleteUsers} from '../controller/UserController.js';

const rotuer = express.Router();

rotuer.get('/user', getUsers);
rotuer.post('/user', createUsers);
rotuer.put('/user/:id', updateUsers);
rotuer.delete('/user/:id', deleteUsers);


export default rotuer;