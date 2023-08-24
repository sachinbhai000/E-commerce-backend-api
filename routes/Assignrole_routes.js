const express = require("express")

const role_assign_routes = express.Router()

const {getrole_assign, postrole_assign, updateRoleassign, deleterole_assign} =require("../controller/Assignrole_controller")

role_assign_routes.get("/api/viewroleassign",getrole_assign)
role_assign_routes.post("/api/addassignrole_user",postrole_assign)
role_assign_routes.put("/api/updaterole_assign/:roleid",updateRoleassign)
role_assign_routes.delete("/api/deleterole_assign/:roleid",deleterole_assign)

module.exports ={role_assign_routes}