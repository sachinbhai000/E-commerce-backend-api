const offer_routes = express.Router()

const {get_offer, post_offer, update_offer} = require("../controller/Offer_controller")

offer_routes.get("/api/admin/get_viewoffer-list",get_offer)
offer_routes.post("/api/admin/add-newcategory", post_offer)
offer_routes.put("/api/admin/update-offerstatus-change/:id",update_offer)
// user_profile_routes.delete("/deleteuser_profile/:user_id",deleteuser_profile)

module.exports ={offer_routes}
