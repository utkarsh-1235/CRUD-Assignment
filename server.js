const express = require('express')
require("dotenv").config()
const userRoute = require('./Routes/userRoute.js')
const connectToDb = require('./config/db.js')
const app = express()

app.use("/",userRoute)

//database connection
connectToDb();

app.listen(process.env.PORT,async()=>{
    console.log("Server Started at https://localhost:",process.env.PORT)
})