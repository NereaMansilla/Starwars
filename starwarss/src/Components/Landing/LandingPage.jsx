

import React from 'react'
import { Boton } from '../Boton/Boton'
import img from '../../assets/Landing.png'


export const LandingPage = () => {
  return (
  <div className="w-[100vw] h-screen bg-[url('./assets/Landing3png.png')] bg-cover bg-center lg:bg-cover flex justify-center items-center ">
    <div className='w-[80vw] h-[80vh] bg-[#000000c2] flex flex-col justify-center items-center md:flex-row lg:flex-row lg:w-[60vw]'>
     <img src={img} alt='img'/> 
    <Boton/>

   
     </div>
    </div>
    
  )
}
