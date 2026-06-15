import { Pencil,Trash2 } from "lucide-react"
import { Link } from "react-router"
import { api } from "../lib/axios"
import toast from "react-hot-toast"
import { useState } from "react"

function getdate(note){
  const yearArr = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const MyDate = new Date(note.createdAt)
  const date = MyDate.getDate()
  const month = MyDate.getMonth()
  const year = MyDate.getFullYear()
  return `${date} ${yearArr[month]} ${year}` 
}

function NoteCard({note, onDelete}) {
  const [mydate, setMyDate] = useState(getdate(note))
  async function handleDel(){
    await api.delete(`/${note._id}`)
    toast.success("note deleted")
    onDelete(note._id)
  }

  return (
    <div className="card bg-orange-900">
      <div className="card-body">
        <h1 className="card-title">{note.title}</h1>
        <p>{note.body}</p>
        <p>{mydate}</p>
        <div className="card-actions justify-end">
          <Link to={`/note/${note._id}`}>
            <button type="button" className="btn btn-xs btn-soft">
              <Pencil size={15} />
            </button>
          </Link>
          <button type="button" className="btn btn-xs btn-soft btn-error" onClick={handleDel}>
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
