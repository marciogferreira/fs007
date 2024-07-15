import express from 'express';
import FormaPagamentoController from '../controllers/FormaPagamentoController.js';



const formaPagamentoRoutes = express.Router();

const formaPagamentoController = new FormaPagamentoController();
formaPagamentoRoutes.get('/pagamento', formaPagamentoController.findAll);
formaPagamentoRoutes.get('/pagamento/:id', formaPagamentoController.findId);
formaPagamentoRoutes.post('/pagamento', formaPagamentoController.create);
formaPagamentoRoutes.put('/pagamento/:id', formaPagamentoController.update);
formaPagamentoRoutes.delete('/pagamento/:id', formaPagamentoController.delete);

export default formaPagamentoRoutes;