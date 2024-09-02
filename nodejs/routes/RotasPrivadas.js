import express from 'express';
import usuariosRoutes from './UsuariosRoutes.js';
import categoriasRoutes from './CategoriasRoutes.js';
import vendedoresRoutes from './VendedoresRoutes.js';
import formaPagamentoRoutes from './FormaPagamentoRoutes.js';
import produtoRoutes from './ProdutoRoutes.js';
import despesasReceitasRoutes from './DespesasReceitasRoutes.js';
import fornecedoresRoutes from './FornecedorRoutes.js';
import clientesRoutes from './ClientesRoutes.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';



const rotasPrivadas = express.Router();
// MIDDLEWARE ROTAS PRIVADAS
rotasPrivadas.use((request, response, next) => {
    
    let logged = false;
    const token = request.headers.token;
    if(token) {
        try { 
            const check = jwt.verify(token, process.env.APP_KEY);
            if(check) {
                logged = true;
            }
        } catch(error) {
            logged = false;
        }
    }
    
    if(logged === false) {
        return response.send("Not authorized").status(403);
    }
    
    next();
});

rotasPrivadas.use(usuariosRoutes);
rotasPrivadas.use(categoriasRoutes);
rotasPrivadas.use(vendedoresRoutes);
rotasPrivadas.use(formaPagamentoRoutes);
rotasPrivadas.use(produtoRoutes);
rotasPrivadas.use(despesasReceitasRoutes);
rotasPrivadas.use(fornecedoresRoutes); 
rotasPrivadas.use(clientesRoutes);


export default rotasPrivadas;

