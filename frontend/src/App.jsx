import { Routes, Route } from "react-router-dom"
import axios from "axios"
import Land from "../src/pages/Land.jsx"
import CreateNote from "../src/pages/CreateNote.jsx"
import Notes from "../src/pages/Notes.jsx"



function App() {


  return (
    <Routes>
      <Route path = '/' element={<Land/>} />
      <Route path = '/create' element={<CreateNote/>} />
      <Route path = '/notes' element={<Notes/>} />  
    </Routes>
  )
}

export default App
