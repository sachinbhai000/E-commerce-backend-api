const express = require("express")

const user_routes = express.Router()

const {viewUser, viewuserList, addUser, userModify, userstatusUpdate, userPasswordUpdate, deleteUser } = require("../controller/User_controller")

user_routes.get("/api/viewuser",viewUser)
user_routes.get("/api/viewuserList",viewuserList)
user_routes.post("/api/addUser",addUser)
user_routes.put("/api/userModify/:id",userModify)
user_routes.put("api/userstatusUpdate/:id",userstatusUpdate)
user_routes.patch("/api/userPasswordUpdate/:id",userPasswordUpdate)
user_routes.delete("/api/deleteUser/:id",deleteUser)

module.exports ={user_routes}

