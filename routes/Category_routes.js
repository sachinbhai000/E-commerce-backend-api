const express = require("express")
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const path = require("path");
const category_routes = express.Router()

const   {viewCategory, productCategoryNameGet, productAdd,  productCatetogyUpdate ,  productDelete ,  } = require("../controller/Category_controller")

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


category_routes.get("/api/viewCategory",viewCategory)
category_routes.get("/api/productCategoryNameGet", productCategoryNameGet)
// category_routes.post("/api/productAdd",productAdd)
category_routes.post("/api/productAdd", upload.single('category_image'),productAdd)
category_routes.put("/api/productCatetogyUpdate/:categoryid", productCatetogyUpdate )
// category_routes.get("/api/viewcategoryList",viewcategoryList)
category_routes.delete("/api/productDelete/:category_id",productDelete )

module.exports ={category_routes}
