import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

export const db = new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    database: process.env.DATABASE,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
});