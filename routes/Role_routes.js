const express = require("express")

const roles_routes= express.Router()

const  {getrole,postrole, updaterole, deletrole} =require("../controller/Role_controller")

roles_routes.get("/api/viewrole",getrole)
roles_routes.post("/api/addrole",postrole)
roles_routes.put("/api/updaterole/:roleid",updaterole)
roles_routes.delete("/api/deleteroles/:roleid",deletrole)

module.exports ={roles_routes}