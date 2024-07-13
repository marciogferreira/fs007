import { DataTypes } from 'sequelize';
import { db } from '../config/conexao.js';

const CategoriasORM = db.define('Category',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING

    }
)

export default CategoriasORM;