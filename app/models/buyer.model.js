module.exports = (sequelize, Sequelize) => {
    const buyer = sequelize.define("buyer", {
      buyer_id:{
        type: Sequelize.UUID,
        defaultValue: function() {
        return generateMyId()
        },
        allowNull: false,
        primaryKey: true
      },
      buyer_firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      buyer_lastname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      buyer_email: {
        allowNull: false,
        unique: true,
        type: Sequelize.BOOLEAN
      },
      buyer_phone: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
    return buyer;
  };