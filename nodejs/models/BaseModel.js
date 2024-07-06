import Conexao from "../config/conexao.js";

class BaseModel {
    constructor(tableName) {
        this.tableName = tableName;
    }

    async findAll() {
        const conexao = new Conexao();
        const sql = `SELECT * FROM ${this.tableName}`;
        const dados = await conexao.query(sql, {});
        return dados;
    }

    async findId(id) {
        const conexao = new Conexao();
        const sql = `SELECT * FROM ${this.tableName} WHERE id = ${id}`;
        const dados = await conexao.query(sql, {})
        return dados;
    }

    async create(body) {
        const conexao = new Conexao();
        const sql = `INSERT INTO ${this.tableName} SET ?`;
        const dados = await conexao.query(sql, body)
        return dados;
    }

    async update(id, body) {
        const conexao = new Conexao();
        const sql = `UPDATE ${this.tableName} SET ? WHERE id = ${id}`;
        const dados = await conexao.query(sql, body);
        return dados;
    }

    async delete(id) {
        const conexao = new Conexao();
        const sql = `DELETE FROM ${this.tableName} WHERE ?`;
        const dados = await conexao.query(sql, { id: id });
        return dados;
    }
}

export default BaseModel;