import CategoriasORM from "../models/CategoriasORM.js";

class CategoriasController {
    async findAll(req, res) {
        const dados = await CategoriasORM.findAll();
        return res.json(dados);
    }

    async findId(req, res) {
        const dados = await CategoriasORM.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }

    async create(req, res) {
        const { body } = req;
        const dados = await CategoriasORM.create(body);
        return res.json({
            message: 'Categoria inserido com sucesso.',
            id: dados.insertId
        })
    }

    async update(req, res) {
        const dados = await CategoriasORM.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Categoria atualizado com sucesso.',
            id: dados.insertId
        })
    }

    async delete(req, res) {
        await CategoriasORM.destroy({
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Categoria deletado com sucesso.'
        })
    }
}

export default CategoriasController;