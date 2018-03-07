const settings = require("./settings"); // settings.json
const knex = require('knex')({
  client: 'pg',
  version: '9.5.10',
  connection: {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database: settings.database,
    ssl: settings.ssl,
    port: settings.port
  }
});

knex('famous_people')
  .returning('id')
  .insert([{ first_name: 'Di', last_name: 'Wu', birthdate: '1991-06-10' }]).asCallback((err, result) => {
    console.log(result);
  });
knex('famous_people')
  .returning('id')
  .insert([{ first_name: 'David', last_name: 'Haynes', birthdate: '1993-10-15' }]).asCallback((err, result) => {
    console.log(result);
  });