const {response} = require("express");
const connection = require('../model/Db_connection')
const db = require("../model/Db_connection")

//==================get-assign-role ===============//
let getrole_assign = async(req,res) =>{
    try{
        const q1 = "select * from role_assign"
        await db.query(q1,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })

    }catch(error){
        res.send(error.sqlMessage)
    }
};


//==================aasign-role-user==============//

let postrole_assign = async(req,res) =>{
    try{
        const data = req.body;
        const q1 ="insert into role_assign SET ?";
        await db.query(q1,data,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }
            res.send(result);

        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};



//==============update_roleassign===================//

const updateRoleassign = async function(req, res){
    let data = req.body;
    let id = req.query.roleid;
    let sqlquery = "UPDATE role_assign SET status ? where roleid = ?";
  await connection.query(sqlquery,[data,id], function(error, result){
        console.log("result", result)
        if(error){
        console.log(error.sqlMessage);
        }
        else{
         res.send(result);  
         console.log("hello")
        }
    })
}


//===============delete-revoke =================//

let deleterole_assign= async (req, res) =>{
    try{
        const data = req.params.roleid;
        const q2 ="delete from role_assign where roleid =?"
        await db.query(q2, data, (error, result, fields) =>{
            if(error){
                res.send(error.sqlMessage);
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage);
    }
}

module.exports = {getrole_assign, postrole_assign, updateRoleassign, deleterole_assign}