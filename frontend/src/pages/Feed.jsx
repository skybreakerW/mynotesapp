import axios from "axios"
import React, { useEffect } from 'react'
import { useState } from 'react'

const Feed = () => {

  const [notes, setNotes] = useState([
    {
      _id: "1",
      title: "Hello",
      description: "ye le description",
    }
  ])

  useEffect(()=> {
    axios.get("http://localhost:3000/feed")
    .then((res) => {
      setNotes(res.data.notes)
    })
  }, [])

  return (
    <section>

        {
          notes.length > 0 ? (
            notes.map((note) => (
              <div key={note._id}>
                <h1>{note.title}</h1>
                <p>{note.description}</p>
              </div> 
            ))
          ) : (
            <h1>No notes to show</h1>
          )
        }

    </section>
  )
}

export default Feed