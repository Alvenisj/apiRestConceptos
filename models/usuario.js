import { Schema, model } from "mongoose";

const usuarioSchema = Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "El correo electrónico no es válido",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    enum: ["ADMIN_ROLE", "USER_ROLE", "VENTAS_ROLE"],
    required: true,
    default: "usuario",
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

usuarioSchema.methods.toJSON = function () {
  // antes de realizar la operación sacamos __v, password y todo lo demás lo colocamos en ...usuario
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
};

export default model("Usuario", usuarioSchema);
