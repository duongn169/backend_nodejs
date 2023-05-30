require('dotenv').config()
const express = require('express') //commonjs
const path = require('path') //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express() // app express
const port = process.env.PORT
const hostname = process.env.HOST_NAME

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// config template engine
configViewEngine(app)

//Khai báo route
app.use('/', webRoutes)


// simple query
// connection.query(
//   'SELECT * from Users u',
//   function (err, results, fields) {
//     console.log(">>>results= ", results); // results contains rows returned by server
//   }
//   const [results, fields] = connection.query('SELECT * from Users u')
// );

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})