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
client.connect();

const userInput = process.argv[2];

const findName = (name) => {
  client.query('SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1', [name], (err, results) => {
    console.log('Searching...');
    console.log(`Found ${results.rows.length} Person(s) by the name ${name}`);
    results.rows.forEach((result) => {
      console.log("index:", result.id, "First Name:", result.first_name, "Last Name: ", result.last_name, "D.O.B.", result.birthdate.toDateString());
    });
  });
}

findName(userInput);