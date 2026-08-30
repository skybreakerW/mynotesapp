import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"
import Addbtn from '../components/Addbtn.jsx';
import Navi from "../components/Navi.jsx"

const Notes = () => {
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://192.168.29.186:3000/notes")
        .then((res) => {
            setNotes(res.data.notes)
        })
    },[])

  return (
    <div className='bg-[#22242a] mb-16'>
        
        <div className='min-h-screen relative'>
        <h1 className='text-white text-3xl font-extrabold absolute top-6 left-8'>Collections:</h1>
        <section className='flex flex-col flex-wrap justify-center items-center gap-6 p-4'>

        {notes.length > 0 ? (
            notes.map((note)=> (
            <div key={note._id} className='h-auto w-96 bg-slate-500 text-white rounded-2xl p-4 first:mt-20'>
                <h1 className='text-2xl p-1 ml-2 font-black tracking-wider'>{note.title}</h1>
                <h3 className='text-md p-1 ml-2 font-bold tracking-wide leading-7'>{note.description}</h3>
            </div>
            ))
        ) : (
            <Addbtn/>
        )
    }   
        <Addbtn/>
        </section>
        <Navi/>
        </div>
    </div>
  )
}

export default Notes