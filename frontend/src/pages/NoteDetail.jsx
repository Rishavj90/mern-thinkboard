import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { Link, useNavigate, useParams } from "react-router"
import { ChevronLeft } from "lucide-react"
import toast from "react-hot-toast"

const NoteDetail = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    async function fetchData(){
      const res = await api.get(`/${id}`)
      setTitle(res.data.title)
      setBody(res.data.body)
    }
    fetchData() 
  }, [])

  async function updateNote() {
    try {
      if(!title.trim() || !body.trim()){
        throw Error("field empty")
      }
      await api.put(`/${id}`,{ title, body})
      toast.success("note updated")
      navigate('/')
    } catch (error) {
      toast.error("couldn't update note")
      console.error("error update note", error)
    }
  }

  return (
    <div>

      <div className="m-5">
        <Link to="/">
          <div className="flex items-center">
            <ChevronLeft />
            <p>Back to Homepage</p>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-center m-5">
        <div className=" w-96 card border-2">
          <div className="card-body">
            <h1>Edit Note</h1>
            <h2>Title</h2>
            <textarea 
              className="textarea"
              value={title}
              onChange={(a)=>setTitle(a.target.value)}  
            />

            <h2>Body</h2>
            <textarea 
              className="textarea"
              value={body}
              onChange={(a)=>setBody(a.target.value)}  
            />
            <div className="card-actions justify-end">
              <button 
                type="submit"
                className="btn btn-soft"
                onClick={updateNote}
              >done  
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetail
