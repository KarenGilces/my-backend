import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import {  CantonModel } from "./CantonModel.js";

export const DatosPersonalesModel = sequelize.define(
  "datosPersonales",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
      cedula: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      names: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      celular: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      foto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minBibliografia: {
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

CantonModel.hasMany(DatosPersonalesModel, { foreignKey: "cantones_id" });
DatosPersonalesModel.belongsTo(CantonModel, { foreignKey: "cantones_id" });