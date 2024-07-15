import { DataTypes } from 'sequelize';
import { db } from '../config/conexao.js';

const ProdutosORM = db.define('Products',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
        },
        descricao: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.DECIMAL,
        },
        quantidade: {
            type: DataTypes.INTEGER,
        },
        Category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Categories',
                key: 'id'
            }
        },
        supplier_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Suppliers',
                key: 'id'
            }
        },
        comissao: {
            type: DataTypes.DECIMAL,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

export default ProdutosORM;