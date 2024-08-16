import express from 'express';
import VendedoresController from '../controllers/VendedoresController.js';

const vendedoresRoutes = express.Router();

const vendedoresController = new VendedoresController();
vendedoresRoutes.get('/vendedores', vendedoresController.findAll);
vendedoresRoutes.get('/vendedores/:id', vendedoresController.findId);
vendedoresRoutes.post('/vendedores', vendedoresController.create);
vendedoresRoutes.put('/vendedores/:id', vendedoresController.update);
vendedoresRoutes.delete('/vendedores/:id', vendedoresController.delete);

export default vendedoresRoutes;

