import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

import {  MarcaModel } from "./MarcaModel.js";

export const ModeloModel = sequelize.define(
  "modelos",
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
  );MarcaModel.hasMany(ModeloModel, { foreignKey: "id_marca" });
  ModeloModel.belongsTo(MarcaModel, { foreignKey: "id_marca" });