const {response} = require("express");
const connection = require('../model/Db_connection')
const db = require("../model/Db_connection")

//===================get_product_description=====================//
let get_product_description= async(req,res) =>{ 
    try{
        let id = req.params.product_id;
        const sqlquery = "select * from product_description where product_id = ?"
        await db.query(sqlquery,id,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })

    }catch(error){
        res.send(error.sqlMessage)
    }
};

// //====================post_role(Add_role)==================//
// let postrole = async(req,res) =>{
//     try{
//         const data = req.body;
//         const q1 ="insert into role SET ?";
//         await db.query(q1,data,(error,result,fields) =>{
//             if(error){
//                 res.send(error.sqlMessage)
//             }
//             res.send(result);

//         })
//     }catch(error){
//         res.send(error.sqlMessage)
//     }
// };

// //==================put_role(update_role)====================//
// let updaterole =async (req,res) =>{
//     try{
//         const data =[req.body,req.params.roleid]
//         const q2 ="UPDATE role SET ? where roleid =?";
//         await db.query(q2,data,(error,result,fields) =>{
//             if(error){
//                 res.send(error.sqlMessage);
//             }res.send(result)
//         })
//     }catch(error){
//         res.send(error.sqlMessage);
//     }
// }

// //===================delete_role===============//


// let deletrole = async (req, res) =>{
//     try{
//         const data = req.params.role_id;
//         const sqlquery ="DELETE FROM role WHERE role_id = ?";
//         await db.query(sqlquery, data, (error, result, fields) =>{
//             if(error){
//                 res.send(error.sqlMessage);
//             }res.send(result)
//         })
//     }catch(error){
//         res.send(error.sqlMessage);
//     }
// }


module.exports = {get_product_description }