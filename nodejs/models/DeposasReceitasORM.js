import { DataTypes } from 'sequelize';
import { db } from '../config/conexao.js';

const DespesasReceitasORM = db.define('income_expenses',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.DECIMAL,
        },
        data: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.STRING,
        },
        tipo: {
            type: DataTypes.STRING,
        },
        sale_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Sales',
                key: 'id'
            }
        },
        payment_method_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Payment_methods',
                key: 'id'
            }
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

export default DespesasReceitasORM;