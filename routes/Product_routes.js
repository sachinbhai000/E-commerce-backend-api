const express = require("express");
const multer = require("multer");
const path = require("path");
const productRoutes = express.Router();
var cors=require("cors")
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

const {productshow,productadd,productUpdate } = require("../controller/Pro_cantroller")

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


productRoutes.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}));


productRoutes.get("/productshow", productshow);
// productRoutes.get("/shopviewavailqty/:retailer_id", shopViewavAilableQuantity);
// productRoutes.get("/shopviewavailqty/", shopViewavAilableQuantity);
productRoutes.post("/productadd", upload.single("product_image"), productadd );
productRoutes.put("/productUpdate/:product_id",upload.single("product_image"),productUpdate);
// productRoutes.get("/allproductdatashow/:pid", productdescDatashow);
// productRoutes.get("/dataproduct", getlimitUser);

// productRoutes.put(
//   "/shopavailqtyupdate/:retailer_id/:pid",
//   ShopavAvailableQuantityUpdate
// );

module.exports = { productRoutes };