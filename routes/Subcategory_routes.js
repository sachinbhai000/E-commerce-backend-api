const express = require("express")
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const path = require("path");
const subcategory_routes = express.Router()

const {viewSubcategory, viewSubcategorylist, addSubcategory, updateSubcategory, deleteSubcategory }=require("../controller/Subcategeory_controller")

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
    

subcategory_routes.get("/api/viewSubcategory",viewSubcategory)
subcategory_routes.get("/api/viewSubcategorylist",viewSubcategorylist)
subcategory_routes.post("/api/addSubcategory",upload.single('sub_categoryimg'),addSubcategory)
subcategory_routes.put("/api/updateSubcategory/:sub_categoryid",updateSubcategory)
subcategory_routes.delete("/api/deleteSubcategory/:sub_categoryid",deleteSubcategory)

module.exports ={subcategory_routes}




