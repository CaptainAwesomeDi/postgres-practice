// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: "development",
      password: "development",
      database: "vagrant",
      hostname: "localhost",
      port: 5432,
      ssl: true
    }
  }
};