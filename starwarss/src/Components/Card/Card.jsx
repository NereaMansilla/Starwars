import React from 'react'
import { NavLink } from 'react-router-dom'
import img2 from '../../assets/defaultImage.jpg'
import { useState,useEffect } from 'react'

export const Card = ({ c }) => {
const [img, setImg] = useState(c.image)
const [loading, setLoading] = useState(false)


useEffect(()=>{
  try {
  
    fetch(img).then(r => r.status === 404 ? setImg(img2) : null)
  
  } catch (error) {
    console.log(error)
  }  

}, [img])
  return (
    <NavLink to={`/${c.name}`}>
    <div className='bg-[#000]  h-[350px] w-[250px] rounded-md sm:h-[300px] sm:w-[200px] md:h-[300px] md:w-[200px]  lg:w-[200px] lg:h-[300px] xl:w-[250px] xl:h-[350px] flex justify-center  items-center hover:border-2 hover:border-[#000000] hover:cursor-pointer' > 
 <img  className='h-[300px] w-[200px]  object-contain sm:h-[250px] sm:w-[150px]  md:h-[250px] md:w-[150px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[300px]' 
      src={img} alt={"error de imagen"} 
  

  />
    </div>
    </NavLink>
  )
}
