const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const agentController = require('./controllers/agentController');
const validateAgentMiddleware = require('./middlewares/validateAgentMiddleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/swagger');
const swaggerDocument = require('./docs/swagger.json');

const app = express();

// Gerar a documentação Swagger
swaggerDocs(app);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para criar agente
app.post('/agents', validateAgentMiddleware, agentController.create);

// Rota para acessar a documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
