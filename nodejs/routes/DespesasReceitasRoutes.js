import express from 'express';
import DespesasReceitasController from '../controllers/DespesasReceitasController.js';


const despesasReceitasRoutes = express.Router();
const despesasReceitasController = new DespesasReceitasController();
despesasReceitasRoutes.get('/despesasreceitas', despesasReceitasController.findAll);
despesasReceitasRoutes.get('/despesasreceitas/:id', despesasReceitasController.findId);
despesasReceitasRoutes.post('/despesasreceitas', despesasReceitasController.create);
despesasReceitasRoutes.put('/despesasreceitas/:id', despesasReceitasController.update);
despesasReceitasRoutes.delete('/despesasreceitas/:id', despesasReceitasController.delete);

export default despesasReceitasRoutes;