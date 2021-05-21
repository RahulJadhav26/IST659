const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const mysql = require('mysql');



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const PORT = process.env.PORT || 3000 

const db = require("./app/models/")

// ASSOCIATIONS

// Seller has many Books
db.seller.hasMany(db.book)
// Book Belongs to Seller
db.book.belongsTo(db.seller)


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
// db.Sequelize.sync({ force: true }).then(() => {
// console.log("Drop and re-sync db.");
// });
// Routes

const buyers = require('./app/routes/buyer')
app.use('/api/buyer', buyers)


const sellers = require('./app/routes/seller')
app.use('/api/seller', sellers)

const books = require('./app/routes/book')
app.use('/api/book', books)

const requests = require("./app/routes/request")
app.use('/api/request/', requests)

// Listen
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
