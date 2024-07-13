import express from 'express';
import CategoriasController from '../controllers/CategoriasController.js';

const categoriasRoutes = express.Router();

const categoriasController = new CategoriasController();
categoriasRoutes.get('/categorias', categoriasController.findAll);
categoriasRoutes.get('/categorias/:id', categoriasController.findId);
categoriasRoutes.post('/categorias', categoriasController.create);
categoriasRoutes.put('/categorias/:id', categoriasController.update);
categoriasRoutes.delete('/categorias/:id', categoriasController.delete);

export default categoriasRoutes;

