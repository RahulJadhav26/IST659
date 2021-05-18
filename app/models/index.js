const dbConfig = require('../config/db.config')

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    port: 1433,
    dialect :dbConfig.dialect
})

const db = {}

db.Sequelize = Sequelize
db.Sequelize = sequelize


db.seller = require("./seller.model")(sequelize,Sequelize)
db.buyer = require("./buyer.model.js")(sequelize,Sequelize)
db.book = require("./book.model.js")(sequelize,Sequelize)
db.list = require("./listing.model")(sequelize,Sequelize)

console.log(db)
module.exports = db 