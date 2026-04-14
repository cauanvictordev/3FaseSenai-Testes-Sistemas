const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'quitanda_db', // O nome que aparece no seu pgAdmin
  password: 'senai', // A senha que você usa para entrar no pgAdmin
  port: 5432,
});

module.exports = pool;