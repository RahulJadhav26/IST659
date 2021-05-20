module.exports = (sequelize, Sequelize) =>{
    const List = sequelize.define("list",{
        list_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        book_id:{
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        sellerSellerid:{
            type: Sequelize.INTEGER,
            allowNull:false,
        }
    },{
        // // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
      })
    return List
}