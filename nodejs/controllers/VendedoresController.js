import Helpers from "../helpers/Helpers.js";
import VendedoresORM from "../models/VendedoresORM.js";
import UsuariosORM from "../models/UsuariosORM.js";

class VendedoresController {
    async findAll(req, res) {
        const dados = await VendedoresORM.findAll();
        return res.json(dados);
    }

    async findId(req, res) {
        const dados = await VendedoresORM.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }

    async create(req, res) {
        const { body } = req;
        const dados = await VendedoresORM.create(body);
        return res.json({
            message: 'Vendedor(a)  inserido com sucesso.',
            id: dados.insertId
        })
    }

    async update(req, res) {
        const dados = await VendedoresORM.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Vendedor(a)  atualizado com sucesso.',
            id: dados.insertId
        })
    }

    async delete(req, res) {
        await VendedoresORM.destroy({
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Vendedor(a)  deletado com sucesso.'
        })
    }
}

export default VendedoresController;