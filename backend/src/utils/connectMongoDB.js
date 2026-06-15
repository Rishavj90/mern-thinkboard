import "dotenv/config"
import mongodb from "mongoose"

export async function connectMongoDB(){
    await mongodb.connect(process.env.MONGODB_URI).then(()=>{
        return console.log(`mongodb started`)
    })
}
