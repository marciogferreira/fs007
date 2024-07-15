import { Sequelize } from 'sequelize';

export const db = new Sequelize({
    dialect: 'postgres',
    database: 'fdev007',
    user: 'admin',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    ssl: true,
  });

