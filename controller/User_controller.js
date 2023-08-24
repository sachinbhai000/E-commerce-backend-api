const { response } = require("express");
const bcrypt = require("bcrypt")
const connection = require("../model/Db_connection");
const db = require("../model/Db_connection");
const uuid = require("uuid").v4;


//============= viewUser===================//

let viewUser = async (req, res) => {
  try {
    const sqlquery = "SELECT * FROM users";
    await db.query(sqlquery, (error, result, fields) => {
      if (error) {
        res.send(error.sqlMessage);
      }
      res.send(result);
    });
  } catch (error) {
    res.send(error.sqlMessage);
  }
};

//============= viewuserList ==============//

let viewuserList = async(req,res) =>{
    try{
        const data = [req.params.user_id];
        const sqlquery = "SELECT * FROM users where user_id=`${req.query.id}` && name like`%${req.query.name}";
        await db.query(sqlquery, data, (error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }
            res.send(result)
        })

    }catch(error){
        res.send(error.sqlMessage)
    }
};

//========== /api/admin/addUser =============//

const addUser = async function(req,res){
  const salt = await bcrypt.genSalt(20);
  value = await bcrypt.hash(req.body.password, salt)

  let userData = {
     id : req.body.id,
    name : req.body.name,
    password : value
  }
  let sqlquery = "INSERT INTO users set ?";
  await connection.query(sqlquery, [userData] ,function(error, result){
      if(error){
          console.log(error.sqlMessage);
      }
      else{
          res.send(result);
      } 
  })
}


// let addUser = async(req,res) =>{
//   try{
//       const data = req.body;
//       const q1 ="insert into users SET ?";
//       await db.query(q1,data,(error,result,fields) =>{
//           if(error){
//               res.send(error.sqlMessage)
//           }
//           res.send(result);

//       })
//   }catch(error){
//       res.send(error.sqlMessage)
//   }
// };
//============== userModify/:id =================//

let userModify = async (req, res) => {
  try {
    const data = [req.body, req.params.id];
    const sqlquery = "UPDATE users SET ? where id =?";
    await db.query(sqlquery, data, (error, result, fields) => {
      // console.log(a.sql)
      if (error) {
        res.send(error.sqlMessage);
      }
      res.send(result);
    });
  } catch (error) {
    res.send(error.sqlMessage);
  }
};

//=============== userstatusUpdate/:id ==================//

let userstatusUpdate = async (req,res) =>{
    try{
        const data =[req.query.status,req.query.user_id]
        const sqlquery ="UPDATE users SET  status=? where user_id =?";
        await db.query(sqlquery, data, (error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage);
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage);
    }
}

//=========== userPasswordUpdate/:id =============//

let userPasswordUpdate = async (req, res) => {
  try {
    const data = [req.body.password, req.query.user_id];
    const sqlquery = "UPDATE users SET password=? where user_id =?";
    await db.query(sqlquery, data, (error, result, fields) => {
      if (error) {
        res.send(error.sqlMessage);
      }
      res.send(result);
    });
  } catch (error) {
    res.send(error.sqlMessage);
  }
};

//=========== deleteUser/:id =============//

let deleteUser = async (req, res) => {
  try {
    const data = req.params.id;
    const sqlquery = "DELETE FROM users WHERE id =?";
    await db.query(sqlquery, data, (error, result, fields) => {
      if (error) {
        res.send(error.sqlMessage);
      }
      res.send(result);
    });
  } catch (error) {
    res.send(error.sqlMessage);
  }
};

module.exports = {viewUser, viewuserList, addUser, userModify, userstatusUpdate, userPasswordUpdate, deleteUser };
