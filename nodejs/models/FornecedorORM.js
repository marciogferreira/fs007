import { DataTypes } from 'sequelize';
import { db } from '../config/conexao.js';

const FornecedorORM = db.define('Supplier',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        whatsapp: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
        cnpj: {
            type: DataTypes.STRING,
        },
        sale_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Sales',
                key: 'id'
            }
        },
        data_comissao: {
            type: DataTypes.DATE,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

export default FornecedorORM;