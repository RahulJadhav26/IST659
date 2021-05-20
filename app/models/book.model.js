module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book",{
        book_id :{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        book_title :{
            allowNull:false,
            type: Sequelize.STRING
        },
        book_price :{            
            allowNull:false,
            type: Sequelize.INTEGER
        },
        book_description :{
            allowNull:false,
            type: Sequelize.STRING
        },
        book_author_first_name:{
            allowNull:false,
            type: Sequelize.STRING
        },
        book_author_last_name:{
            allowNull:false,
            type: Sequelize.STRING
        },
        book_status:{
            allowNull:false,
            type:Sequelize.BOOLEAN,
            defaultValue: false
        },
        sellerSellerid:{
            // Foriegn Key
            allowNull:false,
            required:true,
            type: Sequelize.INTEGER
        }
    },{
        // // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
      });
    return Book;
};
