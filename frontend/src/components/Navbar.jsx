import {Link} from "react-router"
import { PlusIcon } from "lucide-react"

const Navbar = () => {
  return (
    <header className="border-b bg-base-300">
      <div className="flex items-center justify-between p-2">
        <h1>Thinkboard</h1>
        <div className="flex items-center justify-center">
          <Link to={"/createNote"}className="btn btn-outline btn-primary">
            <PlusIcon />
            <span>New Note</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
