import React from 'react'
import { SavePlus } from 'lucide-react';

const Savebtn = () => {
  return (
    <button type='submit' className='bg-slate-600 flex flex-row items-center justify-center gap-4 p-4 rounded-4xl tracking-widest font-bold text-2xl cursor-pointer'>
      <SavePlus size={40} color="#ffffff" />Save
    </button>
  )
}

export default Savebtn