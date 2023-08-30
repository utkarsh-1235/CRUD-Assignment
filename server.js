const express = require('express')
require("dotenv").config()
const userRoute = require('./Routes/userRoute.js')
const connectToDb = require('./config/db.js')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 5000

app.use(cors())

// middlewares to work with json data
app.use(express.json())

//router
app.use("/",userRoute)

//database connection
app.listen(port,async()=>{
  await connectToDb()
  console.log(`Server is running successfully at https://localhost:${port}`)
})