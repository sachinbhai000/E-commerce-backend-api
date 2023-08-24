const express = require("express")

const retailer_registration_routes = express.Router()

const{viewRetailer, postlogin, retailerStatusUpdate, addRetailer, updateRetailer, updateretailerPicture, updateretailerStatus, delRetailer, updateretailerPassword , viewShops,  viewtotalShop, viewtotalStatus, getOpenShop ,forgetPassword} = require("../controller/RetailorRegistation_controller")

const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const path = require("path");

const awsConfig = {
    accessKeyId: "AKIA4YUTK4ODTMBBOCXW",
    secretAccessKey: "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",
    region: "ap-south-1",
    bucketName: "ecomfrontend",
      };

  let S3 = new AWS.S3(awsConfig);

  let upload = multer({
    storage: multerS3({
      bucket: "ecomfrontend",
      s3: S3,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      acl: "public-read",
      key: (req, file, cb) =>
         cb(
        null,
        `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`
      ),
  }),
   });

retailer_registration_routes.get("/api/viewRetailer",upload.single('product_image'),viewRetailer)
retailer_registration_routes.get("/api/viewShops",viewShops)
retailer_registration_routes.get("/api/viewtotalShop",viewtotalShop)
retailer_registration_routes.get("/api/viewtotalStatus",viewtotalStatus)
retailer_registration_routes.post("/api/getopenshoplogin",getOpenShop)
retailer_registration_routes.post("/api/postlogin",postlogin)
retailer_registration_routes.post("/api/addRetaile",addRetailer)
retailer_registration_routes.put("/api/retailerStatusUpdate/:r_id",retailerStatusUpdate)
retailer_registration_routes.put("/api/updateRetailer/:r_id",updateRetailer)
retailer_registration_routes.put("/api/updateretailerPicture/:r_id",updateretailerPicture)
retailer_registration_routes.put("/api/updateretailerStatus/:r_id",updateretailerStatus)
retailer_registration_routes.put("/api/updateretailerPassword/:r_id",updateretailerPassword)
retailer_registration_routes.delete("/api/delRetailer/:roleid",delRetailer)
retailer_registration_routes.post("/forgetpassword",forgetPassword)


module.exports ={retailer_registration_routes}