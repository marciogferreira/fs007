import UsuariosORM from '../models/UsuariosORM.js';
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import Helpers from "../helpers/Helpers.js";

class AuthController {
    async login(req, res) {
        
        const { email, senha } = req.body;
        const hashSenha = Helpers.getHash(senha);
        const dados = await UsuariosORM.findOne({
            where: {
                email: email, 
                senha: hashSenha
            }
        });

        if(dados) {
            const user = {
                id: dados.id,
                nome: dados.nome,
                email: dados.email
            }
            const token = jwt.sign(user, process.env.APP_KEY);
            const data = {
                msg: 'Usuário logado com sucesso',
                token: token
            }
            return res.json(data);
        }

        return res.status(403).json({
            msg: 'Email ou senha inválidos'
        });
    }

}

export default AuthController;
