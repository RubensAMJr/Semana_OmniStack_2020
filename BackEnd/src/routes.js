const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionController');
const routes = express.Router();



//Lista todas as ongs
routes.post('/sessions', SessionsController.create);
//Rota criada em arquivo separado
routes.post('/ongs', OngController.create);
//Deleta a ong
//routes.delete('/ongs', OngController.delete);

routes.get('/incidents',  IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile',ProfileController.index);

  //exporta variaveis
  //exportando as rotas
  module.exports = routes