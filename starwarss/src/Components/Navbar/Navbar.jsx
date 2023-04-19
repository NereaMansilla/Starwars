
import React from 'react'
import logo from '../../assets/logo.png'
export const Navbar = () => {
  return (
    <div className=" bg-[url('./assets/stars.jpg')] bg-cover  h-3/4 bg-black flex justify-center  items-center lg:h-[40vh]">
        <img className='h-[200px] w-[400px]' src={logo} alt="logo" />
    </div>
  )
}

