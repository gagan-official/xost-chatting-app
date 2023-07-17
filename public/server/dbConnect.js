var sql=require('mysql2')

var con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"forxost"
})
con.connect((err)=>{
    if(err) throw err
    console.log("connected!")
})
