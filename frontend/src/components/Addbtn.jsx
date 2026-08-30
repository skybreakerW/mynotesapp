import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CirclePlus } from 'lucide-react';

const Addbtn = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/create")
    }

  return (
    <button 
    onClick={handleClick}
    className='bg-slate-600 rounded-full fixed bottom-20 right-4'>
        <CirclePlus size={60} color="#ffffff" strokeWidth={0.5} />
    </button>
  )
}

export default Addbtn

{/* <CirclePlus size={48} color="#ffffff" strokeWidth={0.5} /> */}