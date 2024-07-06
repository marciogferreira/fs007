import mysql from "mysql";
import { makeDb } from 'mysql-async-simple';
class Conexao {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'fdev5',
            port: 3306,
        });
        this.db = makeDb();
    }

    async query(sql, params){

        await this.db.connect(this.connection);
        try {
            const data = await this.db.query(this.connection, sql, params);
            return data;
        } catch(e) {
            throw e;
        } finally {
            await this.db.close(this.connection);
        }     
    }
}

export default Conexao;