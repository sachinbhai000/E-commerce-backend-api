const cookieParser = require("cookie-parser")
const express =require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())
// const corsOptions = {
//     origin: ['http://localhost:3000','http://localhost:3001'],
//     credentials: true,

// }
// app.use(cors(corsOptions));

const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

// const options ={
//     definition: {
//         openapi : '3.0.0',
//         info : {
//             title: 'Node JS api project for E_com',
//             version: '1.0.0'
//         },
//         servers:[
//             {
//                 url: 'http://localhost:5555/'
//             }
//         ]
//     },
//     apis: ['./index.js']
// }

// const swaggerSpec = swaggerJSDoc(options)
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(cookieParser())


const db= require("./model/Db_connection")
const port= 5555

app.listen(port,(err) =>{
    if(err){
        console.log(err.sqlMessage)
    }
    else{
        console.log("server connected")
    }
})

const {user_routes} = require("./routes/User_routes")
app.use("/", user_routes)

// /**
//  * @swagger
//  * /api/viewuser:
//  *  get:
//  *      summary: This api is used to check whether api is working or not in (admin table)
//  *      description: This api is used to check whether api is working or not in (admin table)
//  *      responses:
//  *          200:
//  *              description: To test Get method
//  */
// /**
//  * @swagger
//  *  components:
//  *      schema:
//  *         e_com:
//  *                   type: object
//  *                   properties:
//  *                        id:
//  *                                type: varchar
//  *                        name:
//  *                                type: varchar
//  *                        password:
//  *                                type: varchar  
//  *                        status:
//  *                                type: varchar
//  *                        createdon:
//  *                                type: varchar                     
//  */
// /**
//  * @swagger
//  * /api/addUser:
//  *  post:
//  *      summary: used to insert data into mysql database (admin table)
//  *      description: This api is used to insert data into mysql database (admin table)
//  *      requestBody:
//  *          required: true
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                      $ref: '#components/schema/user'
//  *      responses:
//  *          200:
//  *              description: Added successfully
//  */


// /**
//  * @swagger
//  * /updateuser/{user_id}:
//  *  put:
//  *      summary: used to update data into mysql database (admin table)
//  *      description: This api is used to update data into mysql database (admin table)
//  *      parameters:
//  *          - in: path
//  *            name: user_id
//  *            required: true
//  *            description: Numeric id is required
//  *            schema:
//  *              type: integer
//  *      requestBody:
//  *          required: true
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                      $ref: '#components/schema/user'
//  *      responses:
//  *          200:
//  *              description: updated successfully
//  */

// /**
//  * @swagger
//  * /deleteuser/{user_id}:
//  *  delete:
//  *      summary: This api is used to delete the record from (admin table)
//  *      description: This api is used to delete the record from (admin table)
//  *      parameters:
//  *          - in: path
//  *            name: user_id
//  *            required: true
//  *            description: Numeric id is required
//  *            schema:
//  *              type: integer
//  *      responses:
//  *          200:
//  *              description: data is deleted successfully
//  */

const {user_profile_routes} = require("./routes/Userprofile_routes")
app.use("/",user_profile_routes)


const {category_routes} = require("./routes/Category_routes")
app.use("/",category_routes)

const {subcategory_routes} = require("./routes/Subcategory_routes")
app.use("/",subcategory_routes)

const {roles_routes} = require("./routes/Role_routes")
app.use("/",roles_routes)

const {role_assign_routes} = require("./routes/Assignrole_routes")
app.use("/",role_assign_routes)

const {Customer_routes} = require("./routes/Customer_routes")
app.use("/",Customer_routes)

//==================reatailor============================//

const { productRoutes} = require("./routes/Product_routes")
app.use("/", productRoutes)

const {retailer_registration_routes} = require("./routes/RetailorRegistation_Routes")
app.use("/",retailer_registration_routes)

 const {retailer_banking_routes} = require("./routes/Retailor_banking_routes")
app.use("/", retailer_banking_routes)

const {product_description_routes} = require("./routes/Productdescription_routes")
app.use("/",product_description_routes)



