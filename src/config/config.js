require('dotenv').config(); 

module.exports = {
  development: {
    username: "joao",
    password: "senha123",
    database: "apinode",
    host: "localhost", 
    dialect: "mysql"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_test`,  
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
  },
};
