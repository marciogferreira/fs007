import { DataTypes } from 'sequelize';
import { db } from '../config/conexao.js';

const FormaPagamentoORM = db.define('Payment_method',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING

    }
)

export default FormaPagamentoORM;