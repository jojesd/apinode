const fs = require('fs');
const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configurações do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Node',
      version: '1.0.0',
      description: 'Documentação da API para cadastro de agente',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const saveSwaggerJson = () => {
  const docsDir = path.join(__dirname, 'docs');
  
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
  }

  const jsonPath = path.join(docsDir, 'swagger.json');
  
  fs.writeFileSync(jsonPath, JSON.stringify(swaggerSpec, null, 2), 'utf-8');
};

const swaggerDocs = (app) => {
  saveSwaggerJson();

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get('/swagger.json', (req, res) => {
    res.json(swaggerSpec);
  });
};

module.exports = swaggerDocs;
