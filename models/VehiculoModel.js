import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import {  DatosPersonalesModel } from "./DatosPersonalesModel.js";
import { UserModel } from "./UserModel.js";

export const VehiculoModel = sequelize.define(
  "vehiculos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
      placa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modelo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      anioPublicacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    
     
    
  },
  {
    timestamps: false,
  }
);

UserModel.hasMany(VehiculoModel, { foreignKey: "users_id" });
VehiculoModel.belongsTo(UserModel, { foreignKey: "users_id" });
DatosPersonalesModel.hasMany(VehiculoModel, { foreignKey: "datospersonales_id" });
VehiculoModel.belongsTo(DatosPersonalesModel, { foreignKey: "datospersonales_id" });