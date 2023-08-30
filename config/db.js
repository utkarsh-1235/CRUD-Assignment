 const mongoose = require('mongoose')

 const connectToDb = async()=>{mongoose.connect(process.env.DB_URL).then((conn)=>{
    console.log("Database connected to successfully",conn.connection.host)
 })
 .catch((err)=>{
    console.log("ERROR",err.message)
 })}

 console.log(process.env.DB_URL)
 console.log(process.env.PORT)
 module.exports = connectToDb