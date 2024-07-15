import express from 'express';
import UsuariosController from '../controllers/UsuariosController.js';

const usuariosRoutes = express.Router();

const usuariosController = new UsuariosController();
usuariosRoutes.get('/usuarios', usuariosController.findAll);
usuariosRoutes.get('/usuarios/:id', usuariosController.findId);
usuariosRoutes.post('/usuarios', usuariosController.create);
usuariosRoutes.put('/usuarios/:id', usuariosController.update);
usuariosRoutes.delete('/usuarios/:id', usuariosController.delete);

export default usuariosRoutes;

