const mysql = require('mysql2')
require('dotenv').config()

const con = mysql.createPool({
  host: 'mysql',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  debug: false,
  waitForConnections: true,
  connectionLimit: 1,
  queueLimit: 0,
  namedPlaceholders: true
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
const products = query('SELECT * FROM products')

module.exports = {
  products
}
