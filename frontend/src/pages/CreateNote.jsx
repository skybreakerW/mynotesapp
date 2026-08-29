import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateNote = () => {

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const noteData = new FormData(e.target)

    console.log(noteData)

    axios.post("http://localhost:3000/create", noteData)
    .then((res) => {
      navigate("/feed")
    })
  }

  return (
    <section className='min-h-screen bg-[#22242a] border-amber-100 flex items-start p-8'>
    
    <form onSubmit={handleSubmit} className='text-white'>

      <input type="text" placeholder='title' />
      <button type='submit'>Submit</button>

    </form>
        

    
    </section>
  )
}

export default CreateNote