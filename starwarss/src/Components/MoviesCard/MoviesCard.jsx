
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetMoviesIdQuery } from '../../ReduxTK/AppRedux/Features/MoviesApi'
import { NavLink } from 'react-router-dom'
import { Loading2 } from '../Loading/Loading2'


export  function MoviesCard() {
  const id = useSelector(state => state.search.id)
  const {data,isLoading} = useGetMoviesIdQuery(id)
if(isLoading) return <Loading2/>
  return (
    <div className='bg-[url("./assets/tatooine.jpg")] bg-cover h-[100vh] w-[100vw] flex flex-col  justify-center items-center '>
       <div className='flex justify-start items-center  w-[100vw] '>
        <img className='w-[40px] h-[40px]' src="https://media.giphy.com/media/OuXrUX7dfIlUnhzay3/giphy.gif" alt='git'/>
        <NavLink to='/home'>
        <h1 className='text-white text-[15px] text-center font-[700]'>Back</h1>
        </NavLink>
        </div>
      {
        data?.map((movie)=>(
          <div key={movie.id}>

          <div className='bg-[#0000008e] w-[80vw] h-[80vh] flex flex-col justify-center items-center p-[10px]  md:hidden'>
            <h1 className='text-white text-[15px] font-[600] sm:text-[20px] sm:mb-[5px]'>{movie.title}</h1>
            <img className='h-[300px] w-[200px] sm:w-[250px] sm:h-[350px]' src={movie.image} alt={movie.title} />
            <br/>
          <div className=' h-[30vh] overflow-y-auto' id='scrollbar'>

            <h3 className='text-white text-[14px] font-[600] sm:text-[15px]'>{movie.description}</h3>
            <h3 className='text-white text-[12px] text-center sm:text-[13px]'>Cast:</h3>
            <h3 className='text-white text-[12px] sm:text-[13px]'>{movie.actors}</h3>
          </div>
          </div>

        <div className='bg-[#0000008e] w-[90vw] h-[90vh] hidden  md:flex md:justify-center md:items-center md:p-[10px] lg:p-[15px]'>
        <img className='h-[300px] w-[200px] lg:h-[350px] lg:w-[350px]' src={movie.image} alt={movie.title} />
        <br/>
        <div>
          <h1 className='text-white text-[20px] text-center lg:text-[25px]'>{movie.title}</h1>
          <br/>
          <h3 className='text-white text-[15px] text-center lg:text-[20px]'>{movie.description}</h3>
          <br/>
          <h3 className='text-white text-[13px] text-center lg:text-[15px]'>Cast:</h3>
          <h3 className='text-white text-[13px] text-center lg:text-[15px]'>{movie.actors}</h3>
        </div>

        </div>


          </div>

          
        ))
      }

    </div>
  )
}
