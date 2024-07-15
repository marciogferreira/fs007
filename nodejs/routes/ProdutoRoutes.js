import express from "express";
import ProdutoController from "../controllers/ProdutoController.js";


const produtoRoutes = express.Router();

const produtoController = new ProdutoController();
produtoRoutes.get('/produtos', produtoController.findAll);
produtoRoutes.get('/produtos/:id', produtoController.findId);
produtoRoutes.post('/produtos', produtoController.create);
produtoRoutes.put('/produtos/:id', produtoController.update);
produtoRoutes.delete('/produtos/:id', produtoController.delete);

export default produtoRoutes;