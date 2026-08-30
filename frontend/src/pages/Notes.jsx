import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"
import Addbtn from '../components/Addbtn.jsx';

const Notes = () => {
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/notes")
        .then((res) => {
            setNotes(res.data.notes)
            console.log(res.data)
        })
    },[])

  return (
    <>
    
    <section className='min-h-screen bg-[#22242a] flex flex-col flex-wrap justify-center items-center gap-4'>

    {notes.length > 0 ? (
        notes.map((note)=> (
        <div key={note._id} className='h-auto w-90 bg-slate-500 text-white rounded-2xl p-2'>
            <h1 className='text-2xl p-1 font-bold tracking-wider'>{note.title}</h1>
            <h3 className='text-md p-1 font-medium tracking-wide leading-7'>{note.description}</h3>
        </div>
        ))
    ) : (
        <Addbtn/>
    )
}   
    <Addbtn/>
    </section>

    </>
  )
}

export default Notes