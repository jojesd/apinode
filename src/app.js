const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/AuthRoutes");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require("morgan");  
const winston = require("winston"); 

const app = express();

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/auth", authRoutes);

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

const logger = winston.createLogger({
  level: "info", 
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }) 
  ],
});

// Middleware para rota não encontrada
app.use((req, res, next) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware de erro interno do servidor
app.use((err, req, res, next) => {
  logger.error(`Erro interno: ${err.message}`);
  res.status(500).json({ message: "Erro interno do servidor" });
});

// Inicia o servidor
const port = process.env.PORT || 3000;  
app.listen(port, () => {
  logger.info(`Servidor Express iniciado na porta ${port}`);
});

module.exports = app;
