const express = require("express")

const user_profile_routes = express.Router()

const{ viewUserprofile, viewUserdetail, addUserprofile, updateUserprofilephoto, updateUserprofile, deleteUserprofile } = require("../controller/Userprofile_controller")

user_profile_routes.get("/api/viewUserprofile",viewUserprofile)
user_profile_routes.get("/api/viewUserdetail",viewUserdetail)
user_profile_routes.post("/api/addUserprofile",addUserprofile)
user_profile_routes.put("/api/updateUserprofilephoto/:id",updateUserprofilephoto)
user_profile_routes.put("/api/updateUserprofile/:id", updateUserprofile)
user_profile_routes.delete("/api/deleteUserprofile/:id",deleteUserprofile)

module.exports ={user_profile_routes}
