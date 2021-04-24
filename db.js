const mysql = require('mysql2')
require('dotenv').config()

const con = mysql.createPool({
  host: 'mysql',
  user: 'api_user',
  password: 'api_pass_123',
  database: 'api_db',
  // debug: false,
  // waitForConnections: true,
  // connectionLimit: 1,
  // queueLimit: 0,
  // namedPlaceholders: true
})

con.on('error', function(err) {
  console.log("I'm dead");
})

const query = (q, params = []) => new Promise((resolve, reject) => {
  con.query(q, params, (err, rows, fields) => {
    if (err) return reject(err)
    resolve(JSON.parse(JSON.stringify(rows)))
  })
});

// const products = new Promise((resolve, reject) => {
//     con.query('SELECT * FROM products', (err, rows, fields) => {
//       if (err) reject(err)
//       resolve(JSON.parse(JSON.stringify(rows)))
//     })
// });

module.exports = {
  products: query('SELECT * FROM products')
}
