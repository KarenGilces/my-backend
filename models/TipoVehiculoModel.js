import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";


export const TipoVehiculoModel = sequelize.define(
  "tipoVehiculos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
  },
  {
    timestamps: false,
  }  
  );
  const tipovehiculoData = [
    { descripcion: "Compacto" },
    { descripcion: "Sedan" },
    { descripcion: "Descapatable" },
    { descripcion: "Familiar" },
    { descripcion: "Todoterreno" },                
    // Agrega más objetos para insertar más datos
  ];
  async function seeedtipo() {
    try {
      await sequelize.sync({ force: false }); // Esto eliminará y recreará la tabla (ten cuidado en producción)
  
      for (const tiposData of tipovehiculoData) {
        await TipoVehiculoModel.create(tiposData);
      }
  
      console.log("Datos de tipos vehículo  insertados con éxito.");
    } catch (error) {
      console.error("Error al insertar datos de tipos de vehículos:", error);
    } finally {
      //sequelize.close(); // Cierra la conexión a la base de datos al finalizar
    }
  }
  
  seeedtipo();