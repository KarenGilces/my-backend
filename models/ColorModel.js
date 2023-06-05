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