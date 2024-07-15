import ItensPedidosORM from "../models/ItensPedidosORM.js";

class ItensPedidosController {
    async findAll(req, res) {
        const dados = await ItensPedidosORM.findAll();
        return res.json(dados);
    }
    async findId(req, res) {
        const dados = await ItensPedidosORM.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }
    async create(req, res) {
        const { body } = req;
        const dados = await ItensPedidosORM.create(body);
        return res.json({
            message: 'Item inserido com sucesso.',
            id: dados.insertId
        })
    }
    async update(req, res) {
        const dados = await ItensPedidosORM.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Item atualizado com sucesso.',
            id: dados.insertId
        })
    }
    async delete(req, res) {
        await ItensPedidosORM.destroy({
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Item deletado com sucesso.'
        })
    }
}

export default ItensPedidosController;