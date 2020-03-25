const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(request , response) {  
    //faz um select no banco de todas as ongs
    const ongs = await connection('ongs').select('*');
   
    return response.json(ongs);
  },
   
  async create(request , response){
    //const params = request.params;
    //const query = request.query;
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    //espera a execução do isert no banco 
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    //retorna o Id da ong criada;
    return response.json({ id });
  }
};