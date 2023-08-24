const {response} = require("express");
const connection = require('../model/Db_connection')
const db = require("../model/Db_connection")

// const productDatashow = async (req, res) => {
//     try {
//       const sqlQuery = "SELECT * FROM products";
//       await connection.query(sqlQuery, (error, result) => {
//         if (error) {
//           res.send({ status: 400, Error: error.sqlMessage });
//         } else {
//           res.send({ status: 200, response: result });
//         }
//       });
//     } catch (error) {
//       res.send({ Error: error.sqlMessage });
//     }
//   };
  
  
  
  
//   //==============================All  product data View and product_desc=============
//   const productdescDatashow = async (req, res) => {
//     try {
//       const Id = req.params.pid
//       const sqlQuery = "select pid,retailer_id,price,available_quantity,subcategory_id,item_name,company,image,description,color,size,weight,mfg,expirydate,modelname from product natural join product_description where pid=?";
//       await connection.query(sqlQuery,Id, (error, result) => {
//         if (error) {
//           res.send({ status: 400, Error: error.sqlMessage });
//         } else {
//           res.send({ status: 200, response: result });
//         }
//       });
//     } catch (error) {
//       res.send({ Error: error.sqlMessage });
//     }
//   };
  
//   //=======================================shop View avAilable Quantity=======================
//   const shopViewavAilableQuantity = async (req, res) => {
//     try {
//       let retailerId = req.params.retailer_id;
//       const sqlQuery = 'SELECT available_quantity,COUNT(available_quantity) FROM product WHERE retailer_id=?';
//       await connection.query(sqlQuery, retailerId, (error, result) => {
//         if (error) {
//           res.send({ status: 400, Error: error.sqlMessage });
//         } else {
//           res.send({ status: 200, response: result });
//         }
//       });
//     } catch (err) {
//       res.send({ Error: err.sqlMessage });
//     }
//   };
  
  
  
//   // ================================Add Product ======================
//   const productDataPost = async (req, res) => {
//     try {
//       const productData = {
//         pid:req.body.pid,
//         retailer_id: req.body.retailer_id,
//         price: req.body.price,
//         available_quantity: req.body.available_quantity,
//         subcategory_id: req.body.subcategory_id,
//         item_name: req.body.item_name,
//         company: req.body.company,
//         image: req.file.location,
//       };
//       const sqlQuery = "INSERT INTO product SET?";
//       await connection.query(sqlQuery, productData, (error, result) => {
//         if (error) {
//           res.send({ status: 400, Error: error.sqlMessage });
//         } else {
//           res.send({ status: 200, response: result });
//         }
//       });
//     } catch (error) {
//       res.send({ Error: error.sqlMessage });
//     }
//   };
//   // ================================Shop Product Update ======================
//   const productUpdate = async (req, res) => {
//     try {
//       const data = {
//         retailer_id: req.body.retailer_id,
//         price: req.body.price,
//         available_quantity: req.body.available_quantity,
//         subcategory_id: req.body.subcategory_id,
//         item_name: req.body.item_name,
//         company: req.body.company,
//         image: req.file.location,
//       };
//       let uid = req.params.pid;
//       let sqlQuery = "UPDATE product SET ? WHERE pid = ?";
//       await connection.query(sqlQuery, [data, uid], (error, result) => {
//         if (error) {
//           res.send({ status: 400, Error: error.sqlMessage });
//         } else {
//           res.send({ status: 200, response: result });
//         }
//       });
//     } catch (error) {
//       res.send({ Error: error.sqlMessage });
//     }
//   };
  
//   //===============================shop Status update=====================
//   const ShopavAvailableQuantityUpdate = async (req, res) => {
//     try {
    
//       const data = [req.body.available_quantity, req.params.retailer_id,req.params.pid];
//       const sqlQuery =
//         "UPDATE product SET available_quantity= ? where retailer_id=? and pid=?  ";
//       await connection.query(sqlQuery, data, (error, result) => {
//         if (error) {
//           res.send({ status: 400, Error: error.sqlMessage });
//         } else {
//           res.send({ status: 200, response: result });
//         }
//       });
//     } catch (error) {
//       res.send({ Error: error.sqlMessage });
//     }
//   };
//   // //===============================Shop Profile Picture update=====================
//   // const ShopProfilePictureUpdate = async (req, res) => {
//   //   try {
//   //     const data = [req.file.location, req.params.retailer_id];
//   //     console.log("req.body.status", req.body.status);
//   //     const sqlQuery =
//   //       "UPDATE retailer_registration SET profile_photo= ? where retailer_id= ? ";
//   //     await connection.query(sqlQuery, data, (error, result) => {
//   //       if (error) {
//   //         res.send({ status: 400, Error: error.sqlMessage });
//   //       } else {
//   //         res.send({ status: 200, response: result });
//   //       }
//   //     });
//   //   } catch (error) {
//   //     res.send({ Error: error.sqlMessage });
//   //   }
//   // };
//   // //===============================Shop Password update=====================
//   // const shopPasswordUpdate = async (req, res) => {
//   //   try {
//   //     const data = [req.body.password, req.params.retailer_id];
//   //     const sqlQuery =
//   //       "UPDATE retailer_registration SET password= ? where retailer_id= ? ";
//   //     await connection.query(sqlQuery, data, (error, result) => {
//   //       if (error) {
//   //         res.send({ status: 400, Error: error.sqlMessage });
//   //       } else {
//   //         res.send({ status: 200, response: result });
//   //       }
//   //     });
//   //   } catch (error) {
//   //     res.send({ Error: error.sqlMessage });
//   //   }
//   // };
  
//   // //===================================Shop Remove =========================
//   // const retailersDelete = async (req, res) => {
//   //   try {
//   //     let productId = req.params.retailer_id;
//   //     let sqlQuery = "DELETE FROM retailer_registration where retailer_id=?";
//   //     await connection.query(sqlQuery, productId, (error, result) => {
//   //       if (error) {
//   //         res.send({ status: 400, Error: error.sqlMessage });
//   //       } else {
//   //         res.send({ status: 200, response: result });
//   //       }
//   //     });
//   //   } catch (err) {
//   //     res.send({ Error: err.sqlMessage });
//   //   }
//   // };
  
  
//   let getlimitUser = async (req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 3;
//   getPaginateData("product", page, limit, (data) => {
//       res.json(data);
//     });
//   };
  
  
//   const getPaginateData =(table,page, limit, cb) => {
//     const offset= (page -1) * limit; 
  
//     const qCount=`SELECT COUNT(*) AS total FROM ${table}`
//     const qData= `SELECT * FROM ${table} LIMIT ${limit} OFFSET ${offset}`;
  
//     connection.query(qCount,(err,countResult)=>{
//         if(err) {
//             cb({error:err});
//         }
//         else {
//           connection.query(qData,(err,dataResult)=>{
//                 if(err) {
//                     cb({error:err});
//                 }
//                 else{
//                     const total = countResult[0].total;
//                     const pages = Math.ceil(total/limit);
  
//                     const data = {
//                         total: total,
//                         current_page: page,
//                         per_page: limit,
//                         last_page: pages,
//                         data: dataResult,
//                       };
//                       cb(data)
//                 }
//             })
//         }
  
    
//     })
//   }
  
//   module.exports = {
//       productDatashow,
//       productDataPost,
//       ShopavAvailableQuantityUpdate,
//       shopViewavAilableQuantity,
//       productUpdate,
//       productdescDatashow,
//       getlimitUser
//   };
  


 async function productshow(req,res){
  let retailer_id = [req.cookies.id]
  console.log( retailer_id)
let sqlquery = `select * from  products where retailer_id =?`;
await connection.query(sqlquery, retailer_id ,(err,result)=>{
  if(err){
      console.log(err.sqlMessage)
  }
  else{
      console.log(result);
      res.send(result)
  }
})
}


async function productadd(req,res){
  let data ={
      product_id : req.body.product_id ,
      retailer_id : req.cookies.id ,
      price : req.body.price,
      available_quantity : req.body.available_quantity,
      sub_categoryid : req.body.sub_categoryid,
      item_name : req.body.item_name,
      company_name : req.body.company_name,
      product_image : req.file.location
  }
  let sqlquery = `INSERT into products set ?`
  await connection.query(sqlquery,data,(err,result)=>{
      if(err){
          console.log(err.sqlMessage)
      }
      else{
          // console.log(result)
          res.send(result)
      }
  })
}


const productUpdate = async (req, res) => {
    try {
      const data = {
        product_id : req.body.product_id,
        retailer_id : req.cookies.id,
        price : req.body.price,
        available_quantity : req.body.available_quantity,
        sub_categoryid : req.body.sub_categoryid,
        item_name : req.body.item_name ,
        company_name: req.body.company_name,
        product_image :req.file.location
      };
      let product_id = req.params.product_id;
      let sqlQuery = "UPDATE products SET ? WHERE product_id = ?";
      await connection.query(sqlQuery, [data, product_id], (error, result) => {
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


module.exports = {productshow,productadd,productUpdate }