import { DataTypes } from "sequelize";
import { db } from "../config/conexao.js";

const ClientesOrm = db.define('Clients',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
        },
        whatsapp: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
        cpf_cnpj: {
            type: DataTypes.INTEGER,
        },
        vendedor_ir: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Sales',
                key: 'id'
            }
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

export default ClientesOrm;