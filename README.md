# Projeto Node API com MySQL e Docker

Este projeto utiliza Node.js, MySQL e Docker para rodar uma API que se conecta a um banco de dados. A seguir estão os passos para configurar e rodar o projeto corretamente.

## Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas no seu sistema:

- **Docker** e **Docker Compose** para rodar o banco de dados e a API.
- **Node.js** (versão >= 14) (instalado dentro do container do Docker).

## Passo 1: Clonar o Repositório

Clone este repositório para sua máquina local:

## Passo 2: Crie a imagem docker

docker-compose build


### Explicações

# - Cria um novo arquivo de migration
npx sequelize-cli migration:generate --name nome_da_migration --config src/config/config.js

# - Aplica as migrations pendentes no banco de dados
npx sequelize-cli db:migrate --config src/config/config.js

# - Desfaz a última migration
npx sequelize-cli db:migrate:undo --config src/config/config.js

# - Desfaz todas as migrations
npx sequelize-cli db:migrate:undo:all --config src/config/config.js

# Comando de Seeds:
# - Cria um novo arquivo de seed
npx sequelize-cli seed:generate --name nome_do_seed --config src/config/config.js

# - Executa todos os seeds para popular o banco de dados
npx sequelize-cli db:seed:all --config src/config/config.js

# - Desfaz todos os seeds aplicados
npx sequelize-cli db:seed:undo:all --config src/config/config.js

# - Desfaz um seed específico
npx sequelize-cli db:seed:undo --seed nome_do_seed --config src/config/config.js



