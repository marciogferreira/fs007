import express from 'express';

import PedidosController from '../controllers/PedidosController.js';

const pedidosRoutes = express.Router();

const pedidosController = new PedidosController();
pedidosRoutes.get('/pedidos', pedidosController.findAll);
pedidosRoutes.get('/pedidos/:id', pedidosController.findId);
pedidosRoutes.post('/pedidos', pedidosController.create);
pedidosRoutes.put('/pedidos/:id', pedidosController.update);
pedidosRoutes.delete('/pedidos/:id', pedidosController.delete);

export default pedidosRoutes;