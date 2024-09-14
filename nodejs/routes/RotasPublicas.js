import express from 'express';
import UsuariosController from '../controllers/UsuariosController.js';
import AuthController from '../controllers/AuthController.js';

const rotasPublicas = express.Router();

const authController = new AuthController()
const usuarioController = new UsuariosController();

rotasPublicas.post('/login', authController.login)
rotasPublicas.post('/cadastrar', usuarioController.create)

export default rotasPublicas;

