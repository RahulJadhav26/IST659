const db = require('../models/')
const Request = db.request
console.log(Request)
exports.create = (req, res)=>{
    if(!req.body.book_id || !req.body.sellerSellerid, !req.body.buyerid){
        res.status(400).send({message:"Content can't be empty! "})
        return
    }

    const request = new Request({
        book_id: req.body.book_id,
        seller_id:req.body.sellerSellerid,
        buyer_id:req.body.buyerid
    })

    Request.create(request.dataValues).then(data=>{
        res.send({ message:"Request Generated" ,data})
    }).catch(err =>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while Signing up the Buyer "
        })
    })
}

exports.findBySellerId = (req,res)=>{
    const sellerid = req.query.sellerid
    Request.findAll({ where: { seller_id:sellerid } }).then(data=>{
        if(!data){
            res.send({message:"No Requests for Seller"})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500)
            .send({message:"Error in Finding", err})
    })
}