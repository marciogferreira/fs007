import Helpers from "../helpers/Helpers.js";
import UsuariosORM from "../models/UsuariosORM.js";

class UsuariosController {
    async findAll(req, res) {
        const dados = await UsuariosORM.findAll();
        return res.json(dados);
    }

    async findId(req, res) {
        const dados = await UsuariosORM.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }

    async create(req, res) {
        const { body } = req;
        body.senha = Helpers.getHash(body.senha);
        const dados = await UsuariosORM.create(body);
        return res.json({
            message: 'Usuário inserido com sucesso.',
            id: dados.insertId
        })
    }

    async update(req, res) {
        const dados = await UsuariosORM.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Usuário atualizado com sucesso.',
            id: dados.insertId
        })
    }

    async delete(req, res) {
        await UsuariosORM.destroy({
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Usuário deletado com sucesso.'
        })
    }
}

export default UsuariosController;