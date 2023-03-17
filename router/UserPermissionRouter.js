import express from 'express';
import { getUserPermission,createUserPermission,updateUserPermission,deleteUserPermission} from '../controller/UserPermissionController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/type/users',verifyToken, getUserPermission);
rotuer.post('/type/users',verifyToken, createUserPermission);
rotuer.put('/type/users/:id',verifyToken, updateUserPermission);
rotuer.delete('/type/users/:id',verifyToken,  deleteUserPermission);


export default rotuer;