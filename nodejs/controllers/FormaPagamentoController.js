import FormaPagamentoORM from '../models/FormaPagamentoORM.js';

class FormaPagamentoController {
    async findAll(req, res) {
        const dados = await FormaPagamentoORM.findAll();
        return res.json(dados);
    }

    async findId(req, res) {
        const dados = await FormaPagamentoORM.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }

    async create(req, res) {
        const { body } = req;
        const dados = await FormaPagamentoORM.create(body);
        return res.json({
            message: 'Categoria inserido com sucesso.',
            id: dados.insertId
        })
    }

    async update(req, res) {
        const dados = await FormaPagamentoORM.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Categoria atualizado com sucesso.',
            id: dados.insertId
        })
    }

    async delete(req, res) {
        await FormaPagamentoORM.destroy({
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Categoria deletado com sucesso.'
        })
    }
}

export default FormaPagamentoController;