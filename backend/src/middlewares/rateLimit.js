import "dotenv/config"
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const rateLimit = new Ratelimit({
    redis : Redis.fromEnv(),
    limiter : Ratelimit.slidingWindow(2, "5 s")
})

export async function rateLimitFunc(req, res, next) {
    try {
        const {success} = new rateLimit.limit("my-rate-limiter")
        if(!success){
            return res.status(429).json({
                msg : "too many requests"
            })
        }
        next()
    } catch (error) {
        console.error("rate limit error",error)
        next()
    }
}