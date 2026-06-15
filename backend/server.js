import "dotenv/config"
import express from "express"
import { router } from "./src/routes/noteCRUD.js"
import {connectMongoDB} from "./src/utils/connectMongoDB.js"
import cors from "cors"
import { rateLimitFunc } from "./src/middlewares/rateLimit.js"

const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(rateLimitFunc)

// route
app.use("/api",router)

// app start
connectMongoDB().then(()=>{
    app.listen(process.env.PORT, ()=>console.log("app running"))
})
