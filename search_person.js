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
const userInput = process.argv[2];

let query = knex('famous_people')
.where('first_name', userInput)
.orWhere('last_name', userInput)
.asCallback((err, results) => {
  console.log(results);
});