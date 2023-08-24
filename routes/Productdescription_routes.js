const express = require("express")

const product_description_routes= express.Router()

const  {get_product_description } =require("../controller/Productdescription_controller")

product_description_routes.get("/get_product_description/:product_id",get_product_description)
// roles_routes.post("/api/addrole",postrole)
// roles_routes.put("/api/updaterole/:roleid",updaterole)
// roles_routes.delete("/api/deleteroles/:roleid",deletrole)

module.exports ={product_description_routes}