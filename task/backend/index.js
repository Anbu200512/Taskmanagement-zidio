import express from "express";
import "dotenv/config"
import cors from 'cors'
import mongoose from "mongoose";
import cookie from "cookie-parser"

import taskRouters from "./routers/task.router.js"
import authRouters from "./routers/auth.router.js"

mongoose.connect(process.env.MONGODB).then(()=>console.log("connected"))

const server = express()

server.use(cookie())
server.use(express.urlencoded({extended:true}))
server.use(cors({origin:["http://localhost:8000","http://localhost:5173/"]}))
server.use(express.json())


server.use("/auth",authRouters)
server.use("/task",taskRouters)

server.listen(process.env.PORT,()=>{
    console.log("server has connected :" ,process.env.PORT);
})