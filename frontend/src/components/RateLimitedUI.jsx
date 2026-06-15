import { ZapIcon } from "lucide-react"

function RateLimitedUI() {
  return (
    <div className="card-sm w-50">
        <div className="bg-amber-800 card-body">
            <ZapIcon />
            <p className="card-title">rate limit reached</p>
            <p>you made too many requests in short time. try again later</p>
        </div>
    </div>
  )
}

export default RateLimitedUI
