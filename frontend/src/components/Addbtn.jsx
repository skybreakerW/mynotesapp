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
    className='bg-slate-600 rounded-full fixed bottom-4 right-4'>
        <CirclePlus size={60} color="#ffffff" />
    </button>
  )
}

export default Addbtn