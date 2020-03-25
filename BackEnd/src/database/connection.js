//importa o knex
const knex = require('knex');
// pega o arquivo de configuração do knex
const configuration = require('../../knexfile')
//Utiliza as configurações do arquivo de configuração do knex
const connection = knex(configuration.development);

//exporta a conexão com o banco de dados
module.exports = connection;