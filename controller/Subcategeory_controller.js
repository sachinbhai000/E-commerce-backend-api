const {response} = require("express");
const connection = require('../model/Db_connection')
var db = require("../model/Db_connection")

//====================== viewSubcategory =========================//
let viewSubcategory = async(req,res) =>{
    try{
        const sqlquery = "SELECT * FROM sub_category"
        await db.query(sqlquery,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })

    }catch(error){
        res.send(error.sqlMessage)
    }
};

//======================== viewSubcategorylist ===================//

let viewSubcategorylist = async(req,res) =>{
    try{
        const sqlquery ="SELECT category_id, category_name FROM category";
        await db.query(sqlquery,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })

    }catch(error){
        res.send(error.sqlMessage)
    }
};

//============================= addSubcategory ===========================//

const addSubcategory = async (req, res) => {
    try {
      const dataInfo = [
        req.body.category_id,
        req.body.sub_categoryid,
        req.body.sub_categoryname,
        req.file.location,
        // sub_category_add_date: req.body.sub_category_add_date,
      ];
  
      const sqlQuery =
        "INSERT INTO sub_category(category_id,sub_categoryid,sub_categoryname,sub_categoryimg)  values(?,?,?,?)";
  
      await connection.query(sqlQuery, dataInfo, (error, result) => {
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

//========================= updateSubcategory==========================//

const updateSubcategory = async function(req, res){
    let data = req.body;
    let id = req.query.subCategory_id;
    let sqlquery = "UPDATE sub_category SET? where subCategory_id = ?";
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

//========================= deleteSubcategory ==============================//

let deleteSubcategory = async (req, res) =>{
    try{
        const data = req.params.sub_categoryid;
        const sqlquery ="DELETE FROM sub_categery WHERE sub_categoryid =?"
       const a = await db.query(sqlquery, data, (error, result, fields) =>{
         console.log(a.sql);
            if(error){
                res.send(error.sqlMessage);
            }res.send(result)
        })
    }catch(error){
        res.send(error.sqlMessage);
    }
}


module.exports = {viewSubcategory, viewSubcategorylist, addSubcategory, updateSubcategory, deleteSubcategory }