import UsuariosModel from "../models/UsuariosModel.js";

class UsuariosController {
    async findAll(req, res) {
        const usuarioModel = new UsuariosModel();
        const dados = await usuarioModel.findAll();
        return res.json(dados);
    }

    async findId(req, res) {
        const usuarioModel = new UsuariosModel();
        const dados = await usuarioModel.findId(req.params.id);
        return res.json(dados);
    }

    async create(req, res) {
        const usuarioModel = new UsuariosModel();
        const dados = await usuarioModel.create(req.body);
        return res.json({
            message: 'Usuário inserido com sucesso.',
            id: dados.insertId
        })
    }

    async update(req, res) {
        const usuarioModel = new UsuariosModel();
        const dados = await usuarioModel.update(req.params.id, req.body);
        return res.json({
            message: 'Usuário atualizado com sucesso.',
            id: dados.insertId
        })
    }

    async delete(req, res) {
        const usuarioModel = new UsuariosModel();
        const dados = await usuarioModel.delete(req.params.id);
        return res.json({
            message: 'Usuário deletado com sucesso.'
        })
    }
}

export default UsuariosController;