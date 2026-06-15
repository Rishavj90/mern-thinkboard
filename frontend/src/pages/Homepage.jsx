import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUI from '../components/RateLimitedUI'
import NoteCard from "../components/NoteCard"
import { api } from "../lib/axios"

const Homepage = () => { 
  const [isRateLimit, setIsRateLimit] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    const fetchNotes = async ()=>{
      try{
        const res = await api.get("/")
        setNotes(res.data)
        console.log(res.data)
      }catch(error){
        if(error.response?.status === 429){
          setIsRateLimit(true)
        }
        console.error(error)
      }finally{
         setLoading(false)
      }
    }
    fetchNotes()
  }, [])

  function removeNote(id) {
    setNotes(notes.filter(n => n._id !== id))
  }
  
  return (
    <div>
      <Navbar/>
      {isRateLimit && <RateLimitedUI />}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 gap-5 p-4"> 
        {notes.map((note)=>{
          return <NoteCard key={note._id} note={note} onDelete={removeNote}/>
        })}
      </div>
      {loading && <>{"loading ..."}</>}
    </div>
  )
}

export default Homepage
