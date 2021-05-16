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

db.buyer = require("./buyer.model.js")(sequelize,Sequelize)

module.exports = db 