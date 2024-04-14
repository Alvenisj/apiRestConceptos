import bcriptjs from "bcryptjs";
import Usuario from "../models/usuario.js";

export const getUserController = async (req, res) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(desde).limit(limite),
  ]);

  res.status(200).json({
    total,
    usuarios,
  });
};

export const createUserController = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });
  const salt = bcriptjs.genSaltSync(10);
  usuario.password = bcriptjs.hashSync(password, salt);
  await usuario.save();

  res.status(200).json({
    usuario,
  });
};

export const updatePutUserController = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  // validar contra base de datos
  if (password) {
    const salt = bcriptjs.genSaltSync(10);
    resto.password = bcriptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.status(200).json({
    usuario,
    message: "Put - api Controlador",
  });
};

export const deleteUserController = async (req, res) => {
  const { id } = req.params;
  // Borrar físicamente el usuario
  // const usuario = await Usuario.findByIdAndDelete(id);

  // Borrar a través del estado del usuario
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.status(200).json(usuario);
};
