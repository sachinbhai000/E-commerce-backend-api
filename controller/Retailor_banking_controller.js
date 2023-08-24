const {response} = require("express");
const connection = require('../model/Db_connection')
const db = require("../model/Db_connection")

//===================get_banking=====================//
let getbanking= async(req,res) =>{
    try{
        const sqlquery = "select * from retailer_banking"
        await db.query(sqlquery,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })

    }catch(error){
        res.send(error.sqlMessage)
    }
};

module.exports = { getbanking }