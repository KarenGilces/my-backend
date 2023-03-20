import express from 'express';
import { getDatos ,createDatos,updateDatos,deleteDatos} from '../controller/datosPersoanlesController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/datos', verifyToken,getDatos );
rotuer.post('/datos',verifyToken,createDatos);
rotuer.put('/datos/:id', verifyToken, updateDatos);
rotuer.delete('/datos/:id',verifyToken, deleteDatos);


export default rotuer;