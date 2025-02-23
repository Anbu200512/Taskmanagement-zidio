import express from "express"
import { signIn, signOut, signUp, userVerify } from "../controllers/auth.controllers.js"
import verifyToken from "../middlewares/token.js"

const router = express.Router()


router.post("/signup",signUp)

router.post("/signin",signIn)

router.post("/signout",signOut)

router.get("/verify-user",verifyToken,userVerify)


export default router