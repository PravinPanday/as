import User from "../models/UserSchema.js"
import Counsellor from "../models/CounsellorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt.js"


export const register = async (req , res) => {
    const {email,password,name,role,photo,gender} = req.body 
    try {
        let user = null
        if(role=== 'patient'){
            user = user.findOne({email})
        }
        else if(role=== 'counsellor'){
            user = Counsellor.findOne({email})
        }
        // check if user exist
        if(user){
            return res.status(400).json({Message: 'User already  exist'})

            // hash password 
            const salt = await bcrypt.gensalt(10)
            const hashPassword = await bcrypt.hash(password ,salt)
            if(role=== 'patient'){
                user = new User({
                    name,
                    email,
                    password:hashPassword,
                    photo,
                    gender,
                    role
                })
            }
            if(role=== 'counsellor'){
                user = new Counsellor({
                    name,
                    email,
                    password:hashPassword,
                    photo,
                    gender,
                    role
                })
            }
            await user.save()
            res.status(200).json({success:true, Message:"User successfully Created "})
        }
    } catch (error) {
        res.status(500).json({success:false, Message:"Internal server error , Try Again"})
        
    }
};

export const login = async (req , res) => {
    try {
        
    } catch (error) {
        
    }
};