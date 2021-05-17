const db = require('../models/')
const Buyer = db.buyer
const Op = db.Sequelize.Op;
console.log(Buyer)

// Create and Save a new Buyer

    exports.create = (req, res)=>{
    // Validate request
    if(!req.body.buyer_firstname || !req.body.buyer_lastname || !req.body.buyer_email || !req.body.buyer_password ){
        res.status(400).send({message:"Content can't be empty! "})
        return
    }
                // Create user                
                    const buyer = new Buyer({
                        buyerid : 100* Math.random(),
                        buyerfirstname: req.body.buyer_firstname,
                        buyerlastname: req.body.buyer_lastname,
                        buyeremail: req.body.buyer_email,
                        buyerpassword: req.body.buyer_password
                    })
                    
                    console.log("Below")
                    console.log(buyer)
                //Save buyer in the database
                    Buyer.create(buyer.dataValues).then(data =>{
                            console.log("data")
                            console.log(data)
                            res.send(data)
                        }).catch(err =>{
                            res.status(500).send({
                                message:
                                err.message || "Some error occurred while Signing up the Buyer "
                            })
                        })
    }

// Retrieve a buyer from the database using email

exports.findOne = (req,res) =>{
    const email = req.query.email
    const pass  = req.query.password
    Buyer.findOne({where:{ buyeremail: email, buyerpassword: pass}})
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Incorrect Username or Password"})
            }else res.send({message:"Successfully Logged in", data})
        })
        .catch(err =>{
            res
            .status(500)
            .send({message: "Error in Finding"})
        })
}

