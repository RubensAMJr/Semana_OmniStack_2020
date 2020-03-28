//Require = importa pacotes
const express = require('express');
//Require com ./ = importa um arquivo
//importando todas as rotas do arquivo routes..js
const routes = require('./routes');
const cors = require('cors');

//Utilizando o express
const app = express();

//Determina que se está utilizando requisições estruturadas
app.use(express.json());
//está se utilizando das rotas ja criadas no arquivo routes.js
app.use(cors());
app.use(routes)



//Localhost:3333 / cxaminho da aplicação a ser utilizada
app.listen(3333);