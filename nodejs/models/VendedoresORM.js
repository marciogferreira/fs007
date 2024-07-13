import { DataTypes } from 'sequelize';
import { db } from '../config/conexao.js';

const VendedoresORM = db.define('Sales',
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
        cpf: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

export default VendedoresORM;