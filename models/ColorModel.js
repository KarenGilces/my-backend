import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";


export const ColorModel = sequelize.define(
  "color",
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
  const coloresData = [
    { descripcion: "Negro" },
    { descripcion: "Blanco" },
    { descripcion: "Gris oscuro" },
    { descripcion: "Rojo oscuro" },
    { descripcion: "Rojo" }, 
    { descripcion: "Azul oscuro" },
    { descripcion: "Azul" }, 
    { descripcion: "Verde oscuro" },
    { descripcion: "Verde" }, 
    { descripcion: "Marròn" },
    { descripcion: "Beige" }, 
    { descripcion: "Naranja" }, 
    { descripcion: "Amarillo" },
    { descripcion: "Morado" },
    { descripcion: "Rosa" },

    // Agrega más objetos para insertar más datos
  ];
  async function sedcolor() {
    try {
      await sequelize.sync({ force: false }); // Esto eliminará y recreará la tabla (ten cuidado en producción)
  
      for (const colorData of coloresData) {
        await ColorModel.create(colorData);
      }
  
      console.log("Datos de lo colores  insertados con éxito.");
    } catch (error) {
      console.error("Error al insertar los colores:", error);
    } finally {
      //sequelize.close(); // Cierra la conexión a la base de datos al finalizar
    }
  }
  
  sedcolor();