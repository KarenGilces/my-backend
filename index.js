
import express from 'express';
import cors from "cors";
import { PORT } from './config/config.js';
import routeDatos from './router/datos.js';
import rotuerTypeUsers from './router/TypeUsersRouter.js';
import  routerUser from './router/UserRouter.js';
import  routerVerifyUserProfile from './router/VerifyUserProfileRouter.js';
import  routerVerificationType from './router/VerificationTypeRouter.js';
import  routerPermission from './router/PermissionRouter.js';
import  routerUserPermission from './router/UserPermissionRouter.js';
import  routerProvince from './router/ProvinceRouter.js';
import  routerCanton from './router/CantonRouter.js';
import  routerVehiculo from './router/VehiculoRouter.js';
import { sequelize } from "./db/conexion.js";

const _PORT = PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', routeDatos);
app.use('/api', rotuerTypeUsers);
app.use('/api', routerUser);
app.use('/api', routerVerifyUserProfile);
app.use('/api', routerVerificationType);
app.use('/api', routerPermission);
app.use('/api', routerUserPermission);
app.use('/api', routerProvince);
app.use('/api', routerCanton);
app.use('/api', routerVehiculo);
const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada.');
        await sequelize.sync({ force: true })
        app.listen(_PORT, () => {
            console.log(`Servidor corriendo en el puerto => ${_PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
main();

