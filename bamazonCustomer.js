//prompt list
//place order - updates sql and shows total of order
//check inventory



require('dotenv').config()
const { inquirer } = require('inquirer')
const { createConnection } = require('mysql2')

const db = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_database
})

prompt([
  {
    type: 'list',
    name: 'id',
    message: ['What is the ID number?']
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many would you like?'
  }
])
  .then((r) => {
    console.log(r)

  })




db.connect(e => {
  if (e) console.log(e)
  db.query(`SELECT * FROM products`, (e, [{ item_id, product_name, price }]) => {
    if (e) console.log(e)
    console.log(`
      ID: ${item_id}
      Product: ${product_name}
      Price: $${price}
      `)
  })
})