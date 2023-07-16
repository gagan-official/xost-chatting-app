var sql=require('mysql2')

var con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
})
con.connect((err)=>{
    if(err) throw err
    console.log("connected!")
    con.query("create database myDb",(err,res)=>{
        if(err) throw err
        console.log("database created result: ",res)
    })
})
