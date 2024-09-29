const mysql=require('mysql')
let connection=mysql.createConnection({
    host: "localhost",
    user:"root",
    database: "trade",
    password:'Divy@1234'

})
module.exports=connection