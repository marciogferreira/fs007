import express from 'express';
import FornecedorController from '../controllers/FornecedorController.js';

const fornecedoresRoutes = express.Router();

const fornecedorController = new FornecedorController();
fornecedoresRoutes.get('/fornecedores', fornecedorController.findAll);
fornecedoresRoutes.get('/fornecedores/:id', fornecedorController.findId);
fornecedoresRoutes.post('/fornecedores', fornecedorController.create);
fornecedoresRoutes.put('/fornecedores/:id', fornecedorController.update);
fornecedoresRoutes.delete('/fornecedores/:id', fornecedorController.delete);

export default fornecedoresRoutes;