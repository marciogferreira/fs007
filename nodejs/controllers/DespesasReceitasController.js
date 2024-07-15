import DespesasReceitasORM from "../models/DeposasReceitasORM.js";

class DespesasReceitasController {
    async findAll(req, res) {
        const dados = await DespesasReceitasORM.findAll();
        return res.json(dados);
    }

    async findId(req, res) {
        const dados = await DespesasReceitasORM.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }

    async create(req, res) {
        const { body } = req;
        const dados = await DespesasReceitasORM.create(body);
        return res.json({
            message: 'Despesa/Receita inserida com sucesso.',
            id: dados.insertId
        })
    }

    async update(req, res) {
        const dados = await DespesasReceitasORM.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Despesa/Receita atualizada com sucesso.',
            id: dados.insertId
        })
    }

    async delete(req, res) {
        await DespesasReceitasORM.destroy({
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Despesa/Receita deletada com sucesso.'
        })
    }
}

export default DespesasReceitasController;