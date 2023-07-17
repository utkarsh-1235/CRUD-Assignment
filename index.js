const express = require('express')
require("dotenv").config()
const userRoute = require('./Routes/userRoute.js')
const app = express()

app.use("/",userRoute)

app.listen(process.env.PORT,async()=>{
    console.log("Server Started on PORT NO:",process.env.PORT)
})