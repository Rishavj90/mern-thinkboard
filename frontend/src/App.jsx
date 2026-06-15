import {Route, Routes} from 'react-router' 
import NoteDetail from './pages/NoteDetail'
import Homepage from './pages/Homepage'
import CreateNote from './pages/CreateNote'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/createNote' element={<CreateNote />} />
        <Route path='/note/:id' element={<NoteDetail />} />
        </Routes>

    </div>
  )
}

export default App
