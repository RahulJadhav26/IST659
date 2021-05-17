const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const mysql = require('mysql');



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const PORT = process.env.PORT || 8080

// var config =
// {
//     host: 'project659.c5lam8sfki7y.us-east-1.rds.amazonaws.com',
//     user: 'master',
//     password: 'password',  
//     database:'ist659'  
// };

// connect to db
const db = require("./app/models/index.js")
db.Sequelize.authenticate().then(() => {
      console.log("Connected to the database!");
    })
    .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });

// sync
db.Sequelize.sync()

// to force sync during development
db.Sequelize.sync({ force: true }).then(() => {
console.log("Drop and re-sync db.");
});
// Routes

const buyers = require('./app/routes/buyer')
app.use('/api/buyer', buyers)

// Listen
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
