import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { Searchbar } from '../Searchbar/Searchbar'
import { Carrusel } from '../Carrusel/Carrusel'
import { Cards } from '../Cards/Cards'
import { useSelector } from 'react-redux'



export const Home = () => {
  
  const loading = useSelector(state=> state.search.loading)
  console.log('l', loading)


  return (
    <div className="bg-[#000] bg-contain h-auto" >
      <Navbar/>
       <Searchbar/>
       <Carrusel/>  
       <div className='bg-[url("./assets/BG3.jpg")]  bg-auto center center  sm:bg-auto md:bg-[url("./assets/BG1.jpg")] lg:bg-[url("./assets/BG1.jpg")]'>

       <Cards/>
       </div>
      

      
      
      </div>
      
  )
}
