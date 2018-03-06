const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});
client.connect()

const userInput = process.argv[2];

const findLastName = (lastName) => {
  client.query('SELECT * FROM famous_people WHERE last_name = $1', [lastName], (err, res) => {
    console.log(err ? err.stack : res.rows[0]);
    client.end();
  });
}

findLastName(userInput);