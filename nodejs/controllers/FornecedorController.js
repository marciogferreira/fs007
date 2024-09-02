import FornecedorORM from "../models/FornecedorORM.js";


class FornecedorController {
    async findAll(req, res) {
        const dados = await FornecedorORM.findAll();
        return res.json(dados);
    }

    async findId(req, res) {
        const dados = await FornecedorORM.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }

    async create(req, res) {
        const { body } = req;
        const dados = await FornecedorORM.create(body);
        return res.json({
            message: 'Fornecedor(a)  inserido com sucesso.',
            id: dados.insertId
        })
    }

    async update(req, res) {
        const dados = await FornecedorORM.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Fornecedor(a)  atualizado com sucesso.',
            id: dados.insertId
        })
    }

    async delete(req, res) {
        await FornecedorORM.destroy({
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Fornecedor(a)  deletado com sucesso.'
        })
    }
}

export default FornecedorController;