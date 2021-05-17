const db =  require("../models")
const Seller = db.seller
console.log(Seller)

exports.create = (req,res)=>{
    // Validate request

    if(!req.body.seller_firstname){
        res.status(400).send({message:"Content can not be empty!"});
        return
    }

    const seller = new Seller({
        sellerfirstname: req.body.seller_firstname,
        sellerlastname: req.body.seller_lastname,
        selleremail: req.body.seller_email,
        sellerpassword: req.body.seller_password
    })
    console.log(seller)
    // Save in the database 

    Seller.create(seller.dataValues).then(data =>{
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Seller"
        })
    })
}
// Retrieve a buyer from the database using email

exports.findOne = (req,res)=>{
    const email = req.query.seller_email
    const password = req.query.seller_password

    Seller.findOne({where: {selleremail :email, sellerpassword : password }})
        .then(data=>{
            if(!data){
                res.send({message:"Incorrect Password or Email entered"})
            }else{
                res.send({message:"Successfully logged in", data})
            }
        }).catch(err =>{
            res
            .status(500)
            .send({message: "Error in Finding", err})
        })

}
