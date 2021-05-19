const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const mysql = require('mysql');



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const PORT = process.env.PORT || 3000 

// var config =
// {
//     host: 'project659.c5lam8sfki7y.us-east-1.rds.amazonaws.com',
//     user: 'master',
//     password: 'password',  
//     database:'ist659'  
// };


const db = require("./app/models/")

// ASSOCIATIONS

// Seller has many Books
db.seller.hasMany(db.book)
// Book Belongs to Seller
db.book.belongsTo(db.seller)

// // book has many Listings
// db.book.hasMany(db.list)
// // list belong to book
// db.list.belongsTo(db.book)

// // Seller has many Listings
// db.seller.hasMany(db.list)
// // list belong to a seller
// db.list.belongsTo(db.seller)


// connect to db
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


const sellers = require('./app/routes/seller')
app.use('/api/seller', sellers)

const books = require('./app/routes/book')
app.use('/api/book', books)


// Listen
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
