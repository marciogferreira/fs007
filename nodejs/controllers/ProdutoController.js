import ProdutosORM from "../models/ProdutosORM.js";

class ProdutoController {
    async findAll(req, res) {
        const dados = await ProdutosORM.findAll();
        return res.json(dados);
    }

    async findId(req, res) {
        const dados = await ProdutosORM.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }

    async create(req, res) {
        const { body } = req;
        const dados = await ProdutosORM.create(body);
        return res.json({
            message: 'Produto inserido com sucesso.',
            id: dados.insertId
        })
    }

    async update(req, res) {
        const dados = await ProdutosORM.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Produto atualizado com sucesso.',
            id: dados.insertId
        })
    }

    async delete(req, res) {
        await ProdutosORM.destroy({
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Produto deletado com sucesso.'
        })
    }
}

export default ProdutoController;