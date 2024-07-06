import express from 'express';
import UsuariosController from '../controllers/UsuariosController.js';
import AuthController from '../controllers/AuthController.js';

const rotasPublicas = express.Router();

const authController = new AuthController()
rotasPublicas.post('/login', authController.login)

export default rotasPublicas;

