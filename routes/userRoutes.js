import { Router } from "express";
import { check } from "express-validator";

import {
  getUserController,
  createUserController,
  updatePutUserController,
  deleteUserController,
} from "../controllers/userController.js";

import { validarCampos } from "../middleware/validarCampos.js";

import {
  isRoleValido,
  emailExiste,
  existeIdUsuario,
} from "../helpers/dbValidators.js";

const router = Router();

router.get("/", getUserController);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe tener más de 6 letras").isLength({
      min: 6,
    }),
    check("correo").custom(emailExiste),
    // check('rol', 'No es un rol válido').isIn(['usuario','administrador']),
    check("rol").custom(isRoleValido),
    validarCampos,
  ],
  createUserController
);

router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeIdUsuario),
    validarCampos,
  ],
  updatePutUserController
);

router.delete(
  "/:id",
  [
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(existeIdUsuario),
    validarCampos,
  ],
  deleteUserController
);

export default router;
