import express from 'express';
import { getVehiculo,createVehiculo,updateVehiculo,deleteVehiculo} from '../controller/VehiculoController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/vehiculo',verifyToken, getVehiculo);
rotuer.post('/vehiculo',verifyToken, createVehiculo);
rotuer.put('/vehiculo/:id',verifyToken, updateVehiculo);
rotuer.delete('/vehiculo/:id',verifyToken,  deleteVehiculo);


export default rotuer;