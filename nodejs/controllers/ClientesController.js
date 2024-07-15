import ClientesOrm from '../models/ClientesOrm.js';

class ClientesController {
    async findAll(req, res) {
        const dados = await ClientesOrm.findAll();
        return res.json(dados);
    }

    async findId(req, res) {
        const dados = await ClientesOrm.findOne({ where: { id: req.params.id }});
        return res.json(dados);
    }

    async create(req, res) {
        const { nome, whatsapp, email, cpf, user_id } = req.body;
        const dados = await ClientesOrm.create({ nome, whatsapp, email, cpf, user_id });
        return res.json(dados);
    }

    async update(req, res) {
        const { id } = req.params;
        const { nome, whatsapp, email, cpf, user_id } = req.body;
        const dados = await ClientesOrm.update({ nome, whatsapp, email, cpf, user_id }, { where: { id } });
        return res.json(dados);
    }
    
    async delete(req, res) {
        const { id } = req.params;
        const dados = await ClientesOrm.destroy({ where: { id } });
        return res.json(dados);
    }
}

export default ClientesController;