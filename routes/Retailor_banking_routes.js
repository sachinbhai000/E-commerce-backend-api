const express = require("express")

const retailer_banking_routes= express.Router()

const { getbanking } =require("../controller/Retailor_banking_controller")

retailer_banking_routes.get("/getbanking",getbanking)
// roles_routes.post("/api/addrole",postrole)
// roles_routes.put("/api/updaterole/:roleid",updaterole)
// roles_routes.delete("/api/deleteroles/:roleid",deletrole)

module.exports ={retailer_banking_routes}