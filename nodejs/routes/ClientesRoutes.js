import express from 'express';
import ClientesController from '../controllers/ClientesController.js';

const clientesRouter = express.Router();

const clientesController = new ClientesController();
clientesRouter.get('/clientes', clientesController.findAll);
clientesRouter.get('/clientes/:id', clientesController.findId);
clientesRouter.post('/clientes', clientesController.create);
clientesRouter.put('/clientes/:id', clientesController.update);
clientesRouter.delete('/clientes/:id', clientesController.delete);

export default clientesRouter;