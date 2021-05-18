const db = require("../models")
const Book = db.book
const List = db.list
console.log(db)
// Create a new Book Listing

exports.create = (req,res)=>{
    // Validate
    if(!req.body.book_title || !req.body.book_description ||!req.body.book_price  || !req.body.book_author_first_name || !req.body.book_author_last_name || !req.body.sellerSellerid ){
        res.status(400).send({message:"Content can't be empty! "})
        return
    }
    // Create Book
    const book = new Book({
        book_title: req.body.book_title,
        book_description: req.body.book_description,
        book_price: req.body.book_price,
        book_author_first_name: req.body.book_author_first_name,
        book_author_last_name: req.body.book_author_last_name,
        sellerSellerid : req.body.sellerSellerid 
    })

    // Save in the Database 

    Book.create(book.dataValues).then(data => {
        List.create(
            {
                book_id: data.book_id,
                sellerSellerid: data.sellerSellerid
             }).then(data1 =>{
                res.send(data1)
             }).catch(err=>{
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while registering the book "
                    })
            })
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while registering the book "
        })
    })
}

exports.findList = (req,res)=>{
    Book.findAll({where:{book_status:false}})
    .then(data=>{
        if(!data){
            res.send({message:"No Book listings Available"})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res
            .status(500)
            .send({message: "Error in Finding", err})
    })
}

exports.findById = (req,res)=>{
    const seller_id = req.query.sellerSellerid

    Book.findAll({where:{sellerSellerid: seller_id}})
        .then(data=>{
            if(!data){
                res.send({message:"No books listed by Sellers Yet"})
            }else{
                res.send(data)
            }
        }).catch(err=>{
            res.status(500)
                .send({message:"Error in Finding", err})
        })
}