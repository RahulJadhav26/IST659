module.exports = (sequelize, Sequelize) => {
    const Buyer = sequelize.define("buyer", {
      buyerid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      buyerfirstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      buyerlastname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      buyeremail: {
        allowNull: false,
        unique: true,
        validate:{isEmail: true},
        type: Sequelize.STRING
      },
      buyerpassword: {
        allowNull: false,
        type: Sequelize.STRING
      },
    //   buyer_phone: {
    //     // allowNull: true,
    //     type: Sequelize.INTEGER
    //   }
    },{
      // // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,
    });
    return Buyer;
  };
