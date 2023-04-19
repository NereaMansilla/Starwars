

import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

export const Boton = () => {
  return (
    <div className=' h-[10vh]'>
    <NavLink to='/home'>
   <button className=' bg-[#f7d21b] rounded-full p-[15px] flex justify-center items-center sm:p-[30px] sm:mb-[100px]'>
    <AiOutlineArrowRight className='text-[20px] sm:text-[25px]'/>
    </button>
    </NavLink>
    </div>
  )
}

