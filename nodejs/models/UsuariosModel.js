import Conexao from "../config/conexao.js";
import BaseModel from "./BaseModel.js";
class UsuariosModel extends BaseModel {

    constructor() {
        super('usuarios');
    }

    async login(email, senha) {

        const conexao = new Conexao();
        const sql = `SELECT * FROM ${this.tableName} WHERE login =? AND senha =?`;
        const dados = await conexao.query(sql, [email, senha]);
        return dados[0];
    }

}

export default UsuariosModel;