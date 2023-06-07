require('dotenv').config()
const express = require('express') //commonjs
const path = require('path') //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/api')
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');


const app = express() // app express
const port = process.env.PORT
const hostname = process.env.HOST_NAME

// config fileupload
app.use(fileUpload());
//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// config template engine
configViewEngine(app)

//Khai báo route
app.use('/', webRoutes)
app.use('/v1/api/', apiRoutes)



  ; (async () => {
    try {
      //using mongoose
      await connection();

      //using mongodbDriver
      // Connection URL
      const url = process.env.DB_HOST_WITH_DRIVER;
      const client = new MongoClient(url);

      // Database Name
      const dbName = process.env.DB_NAME;

      // Use connect method to connect to the server
      await client.connect();
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('customers');

      // collection.insertOne({'name': 'Hoi dan It'})
      collection.insertOne({'address': 'HN', "email": "gg@gmail.com"})

      app.listen(port, hostname, () => {
        console.log(`backend app listening on port ${port}`)
      })
    } catch (err) {
      console.log(">>>> Error connecting to server", err)
    }
  })()

