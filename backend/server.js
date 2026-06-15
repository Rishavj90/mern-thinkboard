import "dotenv/config"
import express from "express"
import { router } from "./src/routes/noteCRUD.js"
import {connectMongoDB} from "./src/utils/connectMongoDB.js"
import cors from "cors"
import { rateLimitFunc } from "./src/middlewares/rateLimit.js"
import path from "path"

const app = express()

// middleware
if(process.env.NODE_ENV!=="production"){
    app.use(cors({
        origin : "http://localhost:5173"
    }))
}
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(rateLimitFunc)

// route
app.use("/api",router)

// config
const __dirname = path.resolve()
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("/{*path}", (req, res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

// app start
connectMongoDB().then(()=>{
    app.listen(process.env.PORT, ()=>console.log("app running"))
})
