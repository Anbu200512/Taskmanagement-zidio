import msg from "../utils/message.js"
import userModel from "../schemas/auth.Schema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const signUp = async(req,res)=>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
        return msg(res,500,false,"please fill the all fields")
    }

    try{

        const userExits = await userModel.findOne({email})

        if(userExits){
            return msg(res,400,false,"user has already have an account")
        }

        const hashPass  = await bcrypt.hash(password,10)

        const newUser = new userModel({name,email,password:hashPass})

        newUser.save()
        return msg(res,200,true,"signUp success")

    }catch(err){
        return msg(res,500,false,err.message)
    }
}

const signIn = async(req,res)=>{
    const {email,password} = req.body

    if(!email || !password){
        return msg(res,400,false,"please fill the fields")
    }

    try{

        const user = await userModel.findOne({email})
        if(!user){
            return msg(res,400,false,"invalid email")
        }

        const comparePass  = await bcrypt.compare(password,user.password)

        if(!comparePass){
            return msg(res,400,false,"invalid password")
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECURE,{expiresIn:"7d"})
        res.cookie("accessToken",token,{
            httpOnly:true,
            secure:process.env.COOKIES_TEXT === "production",
            sameSite:process.env.COOKIES_TEXT === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return  msg(res,200,true,"signIn success")
    }catch(err){
        return msg(res,500,false,err.message)
    }
}


const signOut = async(req,res)=>{
    try{

        res.clearCookie("accessToken",{
            httpOnly:true,
            secure:process.env.COOKIES_TEXT === "production",
            sameSite:process.env.COOKIES_TEXT === "production" ? "none" : "strict",
        })

        return msg(res,200,true,"user has signOut")

    }catch(err){
        return msg(res,500,false,err.message)
    }
}

const userVerify = async(req,res)=>{
    try{

        const {userId} = req.body;

        if(!userId){
            return  msg(res,400,false,"unable to access")
        }

        const user = await userModel.findById(userId)

        if(!user){
            return  msg(res,400,false,"unable to access")
        }

        return  msg(res,200,true,"user has verify")

    }catch(err){
        return msg(res,500,false,err.message)
    }
}


export {signUp,signIn,signOut,userVerify}