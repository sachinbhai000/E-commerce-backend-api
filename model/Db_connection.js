let mysql = require("mysql")
let details = {
    user:"root",
    password:"",
    host:"localhost",
    database:"e_com"
}
let connection = mysql.createConnection(details)
connection.connect(function(error){
    if(error){
        console.log(error.sqlMessage)
    }
    else{
        console.log('database connected')
    }
})
module.exports = connection;