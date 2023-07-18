 const userModel = require('../Model/userSchema.js');
const {userSchema} = require('../Model/userSchema.js')
 
 //to register the user

 exports.registerUser = async(req,res)=>{
     const {name,email,password} = req.body;

     try{
        await userSchema.create({...req.body})  // creating a document
        console.log(name,email,password)
        res.status(201).json({
            success:true,
            message:"Successfully registered"
        })
     }
     catch(err){
        res.status(501).json({
            success:false,
            message:err.message
        })
     }
 }

 // to login the user if registered
 exports.loginUser = async(req,res)=>{
      const {email,password} = req.body;
      
      try{
        const userExist = userModel.findOne({email})

        //if user is already registered
        if(userExist){

            // check the providedPassword to the actual one
            if(userExist.password == password){
                res.status(201).json({
                    success:true,
                    message:"successfully login"
                })
            }

            // password is not correct  then show error
            else{
                res.status(401).json({
                    success:false,
                    message:"wrong password"
                })
            }
        }
        
            else{
                res.status(404).json({
                    success:false,
                    message:"No any account associated with this"
                })
            }
      }
      catch(err){
        res.status(501).json({
            success:false,
            message:err.message
        })
      }
 }