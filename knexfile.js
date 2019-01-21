module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'hoge',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
