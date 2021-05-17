module.exports = (sequelize,Sequelize) =>{
    const Seller = sequelize.define("seller",{
        sellerid:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sellerfirstname: {
          allowNull: false,
          type: Sequelize.STRING
        },
        sellerlastname: {
          allowNull: false,
          type: Sequelize.STRING
        },
        selleremail: {
          allowNull: false,
          unique: true,
          validate:{isEmail: true},
          type: Sequelize.STRING
        },
        sellerpassword: {
          allowNull: false,
          type: Sequelize.STRING
        },
    });
    return Seller;

};