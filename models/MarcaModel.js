import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";


export const MarcaModel = sequelize.define(
  "marcas",
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
  );const marcasData = [
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    { descripcion: "VOLKSWAGEN" },
    { descripcion: "RENAULT" },
    // Agrega más objetos para insertar más datos
  ];
  async function seed() {
    try {
      await sequelize.sync({ force: false }); // Esto eliminará y recreará la tabla (ten cuidado en producción)
  
      for (const marcaData of marcasData) {
        await MarcaModel.create(marcaData);
      }
  
      console.log("Datos de marcas insertados con éxito.");
    } catch (error) {
      console.error("Error al insertar datos de marcas:", error);
    } finally {
      //sequelize.close(); // Cierra la conexión a la base de datos al finalizar
    }
  }
  
  seed();