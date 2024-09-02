import express from 'express';
import ItensPedidosController from '../controllers/ItensPedidosController.js';

const itensPedidosRouter = express.Router();

const itensPedidosController = new ItensPedidosController();
itensPedidosRouter.get('/itenspedidos', itensPedidosController.findAll);
itensPedidosRouter.get('/itenspedidos/:id', itensPedidosController.findId);
itensPedidosRouter.post('/itenspedidos', itensPedidosController.create);
itensPedidosRouter.put('/itenspedidos/:id', itensPedidosController.update);
itensPedidosRouter.delete('/itenspedidos/:id', itensPedidosController.delete);

export default itensPedidosRouter;