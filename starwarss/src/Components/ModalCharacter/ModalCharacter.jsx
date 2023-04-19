
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSearchCharacterQuery } from '../../ReduxTK/AppRedux/Features/CharactersApi'
import { Loading2 } from '../Loading/Loading2'
import { NavLink } from 'react-router-dom'

export const ModalCharacter = () => {
  const {name} = useParams()
  const {data, isLoading} = useSearchCharacterQuery(name)

 if (isLoading) return <Loading2/>
  return (
    
    <div className='bg-[url("./assets/Milenium.jpg")] bg-cover w-[100vw] h-[100vh] '>
 
      <div className='w-[100vw] h-[100vh] bg-[#000000ad] '>
        <div className='flex justify-start items-center'>
        <img className='W-[50px] h-[50px]' src="https://media.giphy.com/media/OuXrUX7dfIlUnhzay3/giphy.gif" alt='git'/>
        <NavLink to='/home'>
        <h1 className='text-white text-[15px] text-center font-[700]'>Volver</h1>

        </NavLink>
        </div>

       {
        data?.map((c)=>(
          <div key={c.id} className='flex h-[90vh] justify-center items-center'>
            <img className='h-[300px] w-[200px] lg:h-[400px] lg:w-[300px]' src={c.image} alt={c.name}/>
           <div className='flex flex-col justify-center items-center sm:ml-[10px] md:ml-[40px]'>
            <h1 className='text-white font-[700] text-[20px] mb-[10px] md:text-[30px]'>{c.name}</h1>
            <div className='bg-[#000000ab] w-[40vw] h-[30vh] flex flex-col justify-center items-center sm:w-[50vw]  md:h-[40vh]'>
              <h3 className='text-white font-[700]  md:text-lg'> Hogar: {c.homeworld}</h3>
              <h3 className='text-white font-[700] md:text-lg'>Genero: {c.gender}</h3>
              <h3 className='text-white  font-[700] md:text-lg'> Altura: {c.height}</h3>
              <h3 className='text-white  font-[700] md:text-lg'> Especie: {c.species}</h3>
              <h3 className='text-white  font-[700] md:text-lg'> Color de ojos: {c.eyeColor}</h3>
              
            </div>

           </div>

          </div>
        ))
       }
    

    
    
    </div>
    </div>
  )
}
