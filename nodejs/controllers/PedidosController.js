import PedidosORM from "../models/PedidosORM.js";

class PedidosController {
    async findAll(req, res) {
        const dados = await PedidosORM.findAll();
        return res.json(dados);
    }
    async findId(req, res) {
        const dados = await PedidosORM.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }
    async create(req, res) {
        const { body } = req;
        const dados = await PedidosORM.create(body);
        return res.json({
            message: 'Pedido inserido com sucesso.',
            id: dados.insertId
        })
    }
    async update(req, res) {
        const dados = await PedidosORM.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Pedido atualizado com sucesso.',
            id: dados.insertId
        })
    }
    async delete(req, res) {
        await PedidosORM.destroy({
            where: { id: req.params.id }
        });
        return res.json({
            message: 'Pedido deletado com sucesso.'
        })
    }
}

export default PedidosController;