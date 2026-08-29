import { Routes, Route } from "react-router-dom"
import CreateNote from "../src/pages/CreateNote.jsx"
import Feed from "./pages/feed.jsx"
import axios from "axios"


function App() {


  return (
    <Routes>
      <Route path = '/create' element={<CreateNote/>} />
      <Route path = '/feed' element={<Feed />} />
    </Routes>
  )
}

export default App
