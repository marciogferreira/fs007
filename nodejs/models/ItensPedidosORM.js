import { DataTypes } from "sequelize";
import { db } from "../config/conexao.js";

const ItensPedidosORM = db.define('Items_requests',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantidade: {
            type: DataTypes.INTEGER,
        },
        valor: {
            type: DataTypes.DECIMAL,
        },
        pedido_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Requests',
                key: 'id'
            }
        },
        produto_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Products',
                key: 'id'
            }
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

export default ItensPedidosORM;