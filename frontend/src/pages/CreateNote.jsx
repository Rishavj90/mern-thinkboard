import Navbar from "../components/Navbar.jsx"
import {Link, useNavigate} from "react-router"
import { ArrowBigLeft } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"
import { api } from "../lib/axios.js"


const CreateNote = () => {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

    if(!title.trim() || !body.trim()){
      toast.error("both fields required")
      return
    }

    try {
      await api.post("/", {
        title,
        body  
      })
      toast.success("note created")
      navigate('/')
    } catch (error) {
      console.error("creating a note error", error)
    }

  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      
      <Link to={"/"}>
        <div className="btn btn-ghost">
          <ArrowBigLeft />
          <span>back to homepage</span>
        </div>
      </Link>

      <div className="h-full flex items-center justify-center">
        <div className="card w-90 border-2">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h1 className="card-title">Note</h1>
              <textarea 
                className="textarea"
                placeholder="title" 
                value={title} 
                onChange={(a)=>{
                  return setTitle(a.target.value)
              }}/>

              <textarea 
                className="textarea"
                placeholder="Body" 
                value={body} 
                onChange={(a)=>{
                  return setBody(a.target.value)
              }}/>

              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary">done</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default CreateNote
