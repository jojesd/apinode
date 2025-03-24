const app = require("./app");
const sequelize = require("./config/database");
const PORT = process.env.PORT || 3000; 

sequelize.sync().then(() => {
  console.log("Banco sincronizado!");
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((error) => {
  console.error("Erro ao sincronizar o banco de dados: ", error); 
});
