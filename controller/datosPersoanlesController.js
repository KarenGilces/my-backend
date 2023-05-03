import { DatosPersonalesModel } from "../models/DatosPersonalesModel.js";
export const getDatos = async (req, res) => {
    try {
        const datos = await DatosPersonalesModel.findAll({
          attributes: ['id', 'cedula', 'names', 'email','date','celular','sexo', 'foto'
          ,'minBibliografia','cantones_id']
        },{where: {state:true}});
      
        res.status(200).json({datos});
       
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
};
export const createDatos  = async (req, res) => {
  try {
    const { cedula, names, email, date ,celular, sexo, foto ,minBibliografia,cantones_id} = req.body;
    if (!(cedula ||  names ||  email ||  date||  celular  ||  sexo ||  foto||  minBibliografia|| cantones_id)) {
      res.status(400).json({ message: "all input is required" });
    }
    const oldUser = await DatosPersonalesModel.findOne({ where: { cedula: cedula } });
    if (oldUser) {
      return res.status(409).json("cedula existente");
    }
    const users = await DatosPersonalesModel.create({
    cedula,
    names, // sanitize: convert email to lowercase
    email,
      date,
      celular,
    sexo, // sanitize: convert email to lowercase
    foto,
      minBibliografia,
      cantones_id
    });
    res.status(201).json({ users});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateDatos = async (req, res) => {
    if (!req.body.cedula) {
        res.status(400).json({ message: "cedula is required" });
      }
      const type = await DatosPersonalesModel.findOne({ where: { id: req.params.id } });
      if (type) {
        type.set(req.body);
        await type.save();
        res.status(200).json({ message: "update" });
      } else {
        res.status(404).json({ message: "type not found" });
      }
};
export const deleteDatos = async (req, res) => {
  const type = await DatosPersonalesModel.findOne({ where: { id: req.params.id } });
  if (type) {
    type.set({ ...type, state: false });
    await type.save();
    res.status(200).json({ message: "delete" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};

export const createUpdateLastName = async (req, res) => {
  
  if(!req.params.id){
     return res.status(404).json({ message: "usuario no encontrado"});
  }
  if (!req.body.apellido) {
      return res.status(400).json({ message: "apellido is required" });
    }
    const datos = await DatosPersonalesModel.findOne({ where: { id: req.params.id } });
    if (datos) {
        datos.set({ ...datos, lastname: req.body.apellido });
        await datos.save();
       return res.status(200).json({ message: "apellido actualizado"});
    }
};
