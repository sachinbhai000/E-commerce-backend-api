const {response} = require("express");
const connection = require('../model/Db_connection')
const db = require("../model/Db_connection")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const viewRetailer = async function(req, res){
    let sqlquery = "SELECT * FROM retailer_registration";
    await connection.query(sqlquery, function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
         res.send(result);  
         console.log(result);
    })
}


const viewShops = async function(req, res){
    let id = [req.params.retailer_id];
    let sqlquery = "SELECT * FROM retailer_registration where retailer_id=?";
    await connection.query(sqlquery,[id],function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
         res.send(result);  
         console.log(result);
    })
}

 

const getOpenShop = async (req, res) => {
    try {
        let { retailer_id, password } = req.query;
        console.log({ retailer_id, password });
        let sqlQuery = "SELECT retailer_id, status, owner_name, password from retailer_registration where retailer_id  = ? ";
        let a = await connection.query(sqlQuery, retailer_id, async function (error, result) {
            console.log("object ",a.sqlQuery);
            console.log("object ", result);


            const secretKey = 'ravi';
            const options = {
                expiresIn: '1m', // Token expiration time
            };
            const token = jwt.sign({retailer_id:result[0].retailer_id}, secretKey, options);
            console.log("token ",token);
            const userVer = await jwt.verify(token, secretKey)
            console.log(userVer)
            if (error) {
                return res.json({ status: 400, response: error.message })
            }
            if (result.length == 0) {
                return res.json({ status: 400, response: "user not found " })
            }
            console.log("password",result[0].password)
            if (result[0].password == password) {
                if (result[0].status === "active") {
                    res.cookie('token',token)
                    res.cookie('id',retailer_id)
                    return res.json({ status: 200, response: "user logged in", 
                    token, user: result[0] })
                } else {
                    return res.json({ status: 400, response: "your account is blocked please contact admin" })
                }
            } else {
                res.json({ status: 400, response: "invalid credential" })
            }
    })
    } catch (error) {
        res.json({ status: 400, response: error.message })
    }
}


// const getOpenShop = async function(req, res){
//     try{
//         let id = req.query.retailer_id;
//         let password = req.query.password;
//          console.log(id, password)
//         let sqlQuery = "select retailer_id, status from retailer_registration where retailer_id = ? and password = ?"
//         await connection.query(sqlQuery,[id, password], function(error, result){
//             if(error){
//                 res.send({status:400, Error:error.sqlMessage})
//             }else{
//                 if(result.length ==0){
//                     res.json('invalid user,plese enter the correct credentials')
//                 }else{
//             }
//             if(result[0].status === "inactive")
//             console.log("Your Account is blocked");
//             else
//             console.log("Log In Successfully");
//             res.send(result);
//         }})
//     }catch (error){
//         res.send({ Error: error.sqlMessage})
//     }
// }

// const getOpenShop = async (req, res) => {
//     try {
//         let { retailer_id, password } = req.body;
//         console.log({ retailer_id, password });
//         let sqlQuery = "SELECT retailer_id, password, status from retailer_registration where retailer_id= ?";
//         let a = await connection.query(sqlQuery, retailer_id, async function (error, result) {
//             console.log("object ", a.sql);
//             console.log("object ", result);

//             if (error) {
//                 return res.json({ status: 400, response: error.message })
//             }
//             if (result.length == 0) {
//                 return res.json({ status: 400, response: "user not found " })
//             }
//             if (result[0].password == password) {
//                 if (result[0].status === "active")
//                   {
//                     return res.json({ status: 200, response: "user logged in"    })
//                 } else {
//                     return res.json({ status: 400, response: "your account is blocked please contact admin" })
//                 }
//             } else {
//                 res.json({ status: 400, response: "invalid credential" })
//             }
         
            
             

//         })
//     } catch (error) {
//         res.json({ status: 400, response: error.message })
//     }
// }


// const getOpenShop = async function(req, res){

//     let retailer_id = req.query.retailer_id;
//     let password = req.query.password;


//     let sql = "SELECT retailer_id, shop_name, status FROM retailer_registration WHERE retailer_id = ? AND password = ? "
//     const a = await  db.query(sql,[retailer_id, password], async function(error, result){
//         console.log("Sql",a.sql)

//         const secretKey = 'iamsachin';
//         const options = {
//             expiresIn:"2 seconds"
//         };

//         const token = jwt.sign({retailer_id},secretKey,options);

//         const userVer = await jwt.verify(token, "iamsachin")
//         console.log("token",token)


//         if (error) {
//             return res.json({ status: 400, response: error.message })
//         }

//             if(result.length == 0){
//              return res.json({
//                     status:400,
//                    response: "invalid user "
//                 })
//             }   
//             else if(result[0].status ==="active"){
//              return res.send({
//                     status:200,
//                     response:result,
//                     user:token
//                     })

//             }else {
//                    return res.send({
//                           status:404,
//                           response:"your account is blocked pleas contact admin"
//                           })
//             }

//         })
//     }

    

// const getOpenShop = async (req, res) => {
//     try {
//         let { retailer_id, password } = req.body;
//         console.log({ retailer_id, password });
//         let sqlQuery = "select * from retailer_registration where reatailer_id= ?";
//         let a = await connection.query(sqlQuery, retailer_id, async function (error, result) {
//             console.log("object ", a.sql);
//             console.log("object ", result);

//             const secretKey ='your-secret-key';
//             const options ={
//                 expiresIn: '1m', // Token expiration time
//             }
//             const token = jwt.sign({retailer_id}, secretKey, options);
//             console.log("token ",token);
//             const userVer = await jwt.verify(token, secretKey)
//             console.log(userVer)

//             if (error) {
//                 return res.json({ status: 400, response: error.message })
//             }
//             if (result.length == 0) {
//                 return res.json({ status: 400, response: "user not found " })
//             }
//             if (result[0].password == password) {
//                 if (result[0].status === "active") {
//                     return res.json({ status: 200, response: "user logged in",token,user:result[0] })
//                 } else {
//                     return res.json({ status: 400, response: "your account is blocked please contact admin" })
//                 }
//             } else {
//                 res.json({ status: 400, response: "invalid credential" })
//             }
         
//         })
//     } catch (error) {
//         res.json({ status: 400, response: error.message })
//     }
// }


const postlogin = async function(req, res){
    try{
        let id = req.query.retailer_id;
        let password = req.query.password;
        console.log(id, password)
        let sqlQuery = "select retailer_id, status from retailer_registration where retailer_id = ? and password = ?"
        await connection.query(sqlQuery, [id, password], function(error, result){
            if(result[0].status === "Inactive")
            console.log("Your Account is blocked, contact with admin");
            else
            console.log("Loggen In Successfully");
            res.send(result);
        })
    }catch (error){
        res.send({ Error: error.sqlMessage})
    }
}



const viewtotalStatus = async function(req, res){
     let sqlquery = "select status, count(*) total_shop from retailer_registration group by status;";
    await connection.query(sqlquery, function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
         res.send(result);  
         console.log(result);
    })
}


const viewtotalShop  = async function(req, res){
    let sqlquery = "SELECT count(*) as totalShops from retailer_registration";
    await connection.query(sqlquery, function(error, result){
        if(error)
        console.log(error.sqlMessage);
        else
         res.send(result);  
         console.log(result);
    })
}


const addRetailer = async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(20);
      const value = await bcrypt.hash(req.body.password,salt)
      console.log(value)
    const data = [
    req.body.retailer_id,
    req.body.shop_name,
    value,
    req.body.owner_name,
    req.files.registration_document[0].location,
    req.files.profile_photo[0].location,
    req.body.gst_no,
    req.body.registration_no,
    req.body.pan_no,
    req.body.address,
    req.body.state,
    req.body.city,
    req.body.pincode,
    req.body.contact_no,
    req.body.email,
    req.body.status
    ];
    console.log("data",req.files)
    console.log("object",req.files.registration_document[0].location)
    const sqlQuery =
    "INSERT INTO retailer_registration values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    await connection.query(sqlQuery, data, (error, result) => {
    console.log(result, "result");
    if (error) {
    res.send({ status: 400, Error: error.sqlMessage });
    } else {
    res.send({ status: 200, response: result });
    }
    });
    } catch (error) {
    res.send({ Error: error.sqlMessage });
    }
    };


const retailerStatusUpdate = async function(req, res){
    let data = req.query.status;
    let id = req.query.retailer_id;
    console.log(data, id)
    let sqlquery = "UPDATE retailer_registration SET status=? where retailer_id = ?";
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

const updateRetailer = async function(req, res){
    let data = req.body;
    let id = req.query.retailer_id;
    let sqlquery = "UPDATE retailer_registration SET? where retailer_id = ?";
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


const updateretailerPicture = async function(req, res){
    let data = req.body.profile_photo;
    let id = req.query.retailer_id;
    let sqlquery = "UPDATE retailer_registration SET profile_photo=? where retailer_id = ?";
  await connection.query(sqlquery, [data, id], function(error, result){
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

const updateretailerStatus = async function(req, res){
    let data = req.body.status;
    let id = req.query.retailer_id;
    let sqlquery = "UPDATE retailer_registration SET status=? where retailer_id = ?";
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


const updateretailerPassword = async function(req, res){
    let data = req.body.password;
    let id = req.query.retailer_id;
    let sqlquery = "UPDATE retailer_registration SET password=? where retailer_id = ?";
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


const delRetailer = async function(req, res){
    let id = [req.params.retailer_id];
     let sqlquery = "DELETE FROM retailer_registration WHERE retailer_id = ?";
     await connection.query(sqlquery,[id], function(error, result){
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

const forgetPassword = async function(req,res){

}

module.exports={viewRetailer, postlogin, retailerStatusUpdate, addRetailer, updateRetailer, updateretailerPicture, updateretailerStatus, delRetailer, updateretailerPassword , viewShops,  viewtotalShop, viewtotalStatus, getOpenShop,forgetPassword }