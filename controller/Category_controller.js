const {response} = require("express");
const connection = require('../model/Db_connection')
const db = require("../model/Db_connection")
//====================viewCategory===============================//

let viewCategory = async(req,res) =>{
    try{
        const sqlquery = "SELECT * FROM category";
        await db.query(sqlquery,(error,result,fields) =>{
            if(error){
                res.send(error.sqlMessage)
            }res.send(result)
        })

    }catch(error){
        res.send(error.sqlMessage)
    }
};


//=================== show Category_name ===============================//

const productCategoryNameGet = async (req, res) => {
    try {
    let sqlQuery = "SELECT category_name FROM category";
    await connection.query(sqlQuery, (error, result) => {
    if (error) {
    res.send({ status: 400, Error: error.sqlMessage });
    } else {
    res.send({ status: 200, response: result });
    }
    });
    } catch (err) {
    res.send({ Error: error.sqlMessage });
    }
    };


//======================= add product =========================//
    const productAdd = async (req, res) => {
    try {
    const data = [
    req.body.category_id,
    req.body.category_name,
    // req.body.gst,
    req.file.location,
    // product_add_date: req.body.product_add_date,
    ];
    console.log("data",req.body.category_id)
    const sqlQuery = 'INSERT INTO category(category_id,category_name,category_image) values(?,?,?)'
    console.log('sqlQuery',sqlQuery)
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
    
    // const productAdd = function(req,res){
    //     let data = [req.body.category_id,req.body.category_name, req.file.location]
    //     let sql = 'INSERT INTO category(category_id,category_name, category_image) values(?,?,?)'
    //     connection.query(sql, data, function(error,result){
    //         if(error){
    //             console.log(error.sqlMessage)
    //         }
    //         else{
    //             res.send(result)
    //         }
    //     })
    // }

// //======================= addCategory ==============================//

// let addCategory = async(req,res) =>{
//     try{
//         const data = req.body;
//         const sqlquery = "INSERT INTO category SET ?";
//         await db.query(sqlquery,data,(error,result,fields) =>{
//             if(error){
//                 res.send(error.sqlMessage)
//             }
//             res.send(result);

//         })
//     }catch(error){
//         res.send(error.sqlMessage)
//     }
// };

//===================== update product category =========================//

const productCatetogyUpdate = async (req, res) => {
    try {
    const dataInfo = {
    category_id: req.body.category_id,
    category_name: req.body.category_name,
    // gst: req.body.gst,
    category_image: req.file.location,
    // sub_category_add_date: req.body.sub_category_add_date,
    };
    const Categoryid = req.params.category_id;
    const sqlQuery = "UPDATE category SET? where category_id=?";
    await connection.query(
    sqlQuery,
    [dataInfo, Categoryid],
    (error, result) => {
    if (error) {
    res.send({ status: 400, Error: error.sqlMessage });
    } else {
    res.send({ status: 200, response: result });
    }
    }
    );
    } catch (error) {
    res.send({ Error: error.sqlMessage });
    }
    };
 
//======================== viewcategoryList ===================================//

// let viewcategoryList = async (req,res) =>{
//     try{
//         const sqlquery="select category_id, category_name from category";
//         await db.query(sqlquery,(error,result,fields) =>{
//             if(error){
//                 res.send(error.sqlMessage);
//             }res.send(result)
//         })
//     }catch(error){
//         res.send(error.sqlMessage);
//     }
// }

//======================= deleteCategory ====================================//

const productDelete = async (req, res) => {
    try {
    let productId = req.params.category_id;
    let sqlQuery = "DELETE FROM category where category_id=?";
    await connection.query(sqlQuery, productId, (error, result) => {
    if (error) {
    res.send({ status: 400, Error: error.sqlMessage })
} else {
    res.send({ status: 200, response: result });
    }
    });
    } catch (err) {
    res.send({ Error: err.sqlMessage });
    }
    };

module.exports = {viewCategory, productCategoryNameGet, productAdd,  productCatetogyUpdate ,  productDelete ,  }


