import { Sequelize } from "sequelize";

export const db = new Sequelize('fdev007', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});