const {response} = require("express");
const connection = require('../model/Db_connection')
const db = require("../model/Db_connection")

//==================viewUserprofile==================//

let viewUserprofile = async (req,res) =>{
    try{
        const sqlquery = "SELECT * FROM userprofile"
        await db.query(sqlquery,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};

//===================== viewUserdetail ====================//

let viewUserdetail = async(req,res) =>{
    try{
        const data = req.query.id;
        const sqlquery ="SELECT * FROM userprofile where id=?";
        await db.query(sqlquery,data,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }
            res.send(result);

        })
    }catch(error){
        res.send(error.sqlMessage)
    }
};

//==================== addUserprofile ===========================//

let addUserprofile =async (req,res) =>{
    try{
        const data =[req.body]
        const sqlquery ="INSERT INTO userprofile set?";
        await db.query(sqlquery, data, (error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage);
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage);
    }
}

//==================== updateUserprofilephoto========================//

let updateUserprofilephoto =async (req,res) =>{
    try{
        const data =[req.body.profile_poto, req.query.user_id]
        const sqlquery = "UPDATE user_profile SET profile_photo=? where user_id = ?";
        await db.query(sqlquery,data,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage);
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage);
    }
}

//=================== updateUserprofile==================================//

let updateUserprofile =async (req,res) =>{
    try{
        const {id} = req.params
        const{mobile,email,profilephoto} = req.body
        const data = {mobile,email,profilephoto}
        const sqlquery = "UPDATE userprofile SET ? where id = ?";
        const a= await db.query(sqlquery,[data,id],(error,result,fields) =>{
            console.log(a.sql)
            if(error){
                res.send(error.sqlMessage);
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage);
    }
}

//==================== deleteUserprofile ====================//

let deleteUserprofile = async (req,res) =>{
    try{
        const data =[req.params.id]
        const sqlquery = "DELETE FROM userprofile WHERE id = ?";
        await db.query(sqlquery,data,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage);
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage);
    }
}
module.exports = { viewUserprofile, viewUserdetail, addUserprofile, updateUserprofilephoto, updateUserprofile, deleteUserprofile }