module.exports = (sequelize, Sequelize) =>{
    const Request = sequelize.define("request",{
        request_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        book_id:{
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        seller_id:{
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        buyer_id:{
            type: Sequelize.INTEGER,
            allowNull:false,
        }
    },{
        // // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
      });
    return Request
}