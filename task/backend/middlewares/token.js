import jwt from "jsonwebtoken"
import msg from "../utils/message.js"

const verifyToken = async(req,res,next) =>{
    const {accessToken} = req.cookies

    try{

        const decode = jwt.verify((accessToken),process.env.JWT_SECURE)
        console.log(decode);
        if(!decode){
            return msg(res,500,false,"invalid token")
           }
                
            if(decode.id){
                req.body.userId = decode.id
            }
            next()
    }catch(err){
        return  msg(res,500,false,err.message)
    }
}

export default verifyToken