import express from 'express';
import { getPreferenciasviaje,createPreferenciasviaje,
    updatePreferenciasviaje,deletePreferenciasviaje,createUpdatePreferenciasviaje} 
from '../controller/PreferenciasviajeController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/preferenciasviaje',verifyToken, getPreferenciasviaje);
rotuer.post('/preferenciasviaje', verifyToken,createPreferenciasviaje);
rotuer.put('/preferenciasviaje/:id',verifyToken, updatePreferenciasviaje);
rotuer.delete('/preferenciasviaje/:id', verifyToken, deletePreferenciasviaje);
rotuer.put('/preferenciasviajes/:id',verifyToken,createUpdatePreferenciasviaje);


export default rotuer;