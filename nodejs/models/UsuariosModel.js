import Conexao from "../config/conexao.js";
import Helpers from "../helpers/Helpers.js";
import BaseModel from "./BaseModel.js";

class UsuariosModel extends BaseModel {

    constructor() {
        super('usuarios');
    }

    async login(email, senha) {

        const conexao = new Conexao();
        senha = Helpers.getHash(senha);
        console.log("Senha", senha);
        const sql = `SELECT * FROM ${this.tableName} WHERE login =? AND senha =?`;
        const dados = await conexao.query(sql, [email, senha]);
        return dados[0];
    }

    async create(body) {
        const conexao = new Conexao();
        body.senha = Helpers.getHash(body.senha);
        const sql = `INSERT INTO ${this.tableName} SET ?`;
        const dados = await conexao.query(sql, body)
        return dados;
    }

}

export default UsuariosModel;