//prompt list
//place order - updates sql and shows total of order
//check inventory

require('dotenv').config()
const { prompt } = require('inquirer')
const { createConnection } = require('mysql2')

const db = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_database
})

async function getList (columns) {
  let response = await new Promise((resolve, reject) => {
    db.query(`SELECT ${columns} FROM products`, (e, r) => {
      if (e) {
        reject(e)
      } else {
        resolve(r)
      }
    })
  })
  return response
}

  //inquirer prompt for action
  //view all items
  //add items to shopping cart
  //view shopping cart
  //modify shopping cart
  //remove items
  //checks available inventory
  //exit app

const getAction = () => {
  prompt({
    type: 'list',
    name: 'products',
    message: 'What would you like to do?',
    choices: ['View Items', 'View Shopping Cart', 'EXIT']
  })
    .then(({ products }) => {
      switch (products) {
        case 'View Items':
          viewItems()
            .then(r => {
              console.log(r)
            })
            .catch(e => console.log(e))
          break
        case 'View Shopping Cart':
          //viewCart()
          break
        case 'EXIT':
          process.exit()
        default:
        getAction()
        break
      }    
    })
    .catch(e => console.log(e))
  }

async function viewItems() {
  let response = await new Promise((resolve, reject) => {
    db.query(`SELECT * FROM products`, (e, r) => {
      if (e) {
        reject(e)
      } else {
        resolve(r)
      }
      console.log(r)
    })
  // prompt({
  //   type: 'list',
  //   name: 'items',
  //   message: 'Add what you want to your cart:',
  //   choices: 
  // })
  })
  return response
}


db.connect(e => {
  if (e) throw e
  getAction()
})
