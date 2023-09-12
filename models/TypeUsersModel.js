import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const TypeUsersModel = sequelize.define("typeusers",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
},
{
    timestamps:false
}
)
//await TypeUsersModel.sync({ force: true });
;
const tipousuarioData = [
    { type: "Usuario" },
    { type: "Administrador" },
                
    // Agrega más objetos para insertar más datos
  ];
  async function seeed() {
    try {
      await sequelize.sync({ force: false }); // Esto eliminará y recreará la tabla (ten cuidado en producción)
  
      for (const tiposData of tipousuarioData) {
        await TypeUsersModel.create(tiposData);
      }
  
      console.log("Datos de tipos usuarios insertados con éxito.");
    } catch (error) {
      console.error("Error al insertar datos de tipos de usuarios:", error);
    } finally {
      //sequelize.close(); // Cierra la conexión a la base de datos al finalizar
    }
  }
  
  seeed();