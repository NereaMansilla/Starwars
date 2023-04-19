import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { Searchbar } from '../Searchbar/Searchbar'
import { Carrusel } from '../Carrusel/Carrusel'
import { Cards } from '../Cards/Cards'





export const Home = () => {



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
