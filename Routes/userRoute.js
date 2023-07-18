const express = require('express')
const {getUser,registerUser,loginUser} = require('../Controller/userController')

const userRoute = express.Router()

userRoute.post('/register',registerUser) // to register the user
 userRoute.post('/login',loginUser)  // to login the user if registered

module.exports = userRoute