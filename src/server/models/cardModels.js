const { Pool } = require('pg');

const PG_URI =
  'postgres://xenxbyfb:wswO23sgcLr13K7yJfjR-zGIafbA9UWn@kashin.db.elephantsql.com/xenxbyfb';
  


const pool = new Pool({
  connectionString: PG_URI
});






module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};