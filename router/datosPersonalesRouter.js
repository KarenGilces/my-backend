import express from 'express';
import { getDatos ,createDatos,updateDatos,deleteDatos,createUpdateLastName,createUpdateCedula,createUpdateCelular,createUpdateNames,createUpdateDate,createUpdateMinBibliografia,createUpdateSexo} from '../controller/datosPersoanlesController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/datos', verifyToken,getDatos );
rotuer.post('/datos',verifyToken,createDatos);
rotuer.put('/datos/lastname/:id',createUpdateLastName);
rotuer.put('/datos/names/:id',createUpdateNames);

rotuer.put('/datos/cedula/:id',verifyToken,createUpdateCedula);
rotuer.put('/datos/celular/:id',verifyToken,createUpdateCelular);
rotuer.put('/datos/sexo/:id',verifyToken,createUpdateSexo);
rotuer.put('/datos/minBibliografia/:id',verifyToken,createUpdateMinBibliografia);
rotuer.put('/datos/date/:id',createUpdateDate);
rotuer.put('/datos/:id', verifyToken, updateDatos);
rotuer.delete('/datos/:id',verifyToken, deleteDatos);


export default rotuer;