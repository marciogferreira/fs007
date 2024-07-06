import express from 'express';
import UsuariosRoutes from './UsuariosRoutes.js';
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
rotasPrivadas.use(UsuariosRoutes);

export default rotasPrivadas;

