const express = require("express")

const Customer_routes= express.Router()

const  {getcustomer} =require("../controller/Customer_controller")

Customer_routes.get("/api/getcustomer",getcustomer)
// roles_routes.post("/api/addrole",postrole)
// roles_routes.put("/api/updaterole/:roleid",updaterole)
// roles_routes.delete("/api/deleteroles/:roleid",deletrole)

module.exports ={Customer_routes}