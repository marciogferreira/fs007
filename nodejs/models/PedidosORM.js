import { DataTypes } from "sequelize";
import { db } from "../config/conexao.js";

const PedidosORM = db.define('Requests',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: DataTypes.DATA,
        },
        pagamento: {
            type: DataTypes.DECIMAL,
        },
        
        numero_pedido :{
            type: DataTypes.INTEGER,
        },
        valor_pedido: {
            type: DataTypes.DECIMAL,
        },
        cliente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Clients',
                key: 'id'
            }
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

export default PedidosORM;