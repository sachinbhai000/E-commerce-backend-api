const {response} = require("express");
const connection = require('../model/Db_connection')
var db = require("../model/Db_connection")

//======================viewOffer===============================//

let viewOffer = async(req,res) =>{
    try{
        const sqlquery = "SELECT * FROM offers";
        await db.query(sqlquery,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })

    }catch(error){
        res.send(error.sqlMessage)
    }
};

//====================== viewofferList =====================================//

let viewofferList = async(req,res) =>{
    try{
        const sqlquery = "SELECT offer_code, offer_name FROM offers";
        await db.query(sqlquery,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })

    }catch(error){
        res.send(error.sqlMessage)
    }
};

//======================= addOffer==============================//

let addOffer = async(req,res) =>{
    try{
        const data = req.body;
        const sqlquery = "INSERT INTO offers SET ?";
        await db.query(sqlquery, data, (error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }
            res.send(result);

        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};

//===================== updateOffer=========================//

let updateOffer = async (req,res) =>{
    try{
        const data = [req.body.status,req.query.offer_code]
        const sqlquery = "UPDATE offer SET status=? where offer_code = ?";
        await db.query(sqlquery, data, (error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage);
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage);
    }
}

//======================== deleteOffer ===========================//

let deleteOffer = async (req, res) =>{
    try{
        const data = req.params.offer_code;
        const sqlquery ="DELETE FROM offer WHERE offer_code = ?";
        await db.query(sqlquery, data, (error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage);
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage);
    }
}


module.exports = { viewOffer, viewofferList, addOffer, deleteOffer }