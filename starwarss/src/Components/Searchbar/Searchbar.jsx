
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fullState, modal } from '../../ReduxTK/AppRedux/Features/searchbarSlice'
import { useGetCharactersQuery } from '../../ReduxTK/AppRedux/Features/CharactersApi'
import { NavLink } from 'react-router-dom'
import './Searchbar.css'

export const Searchbar = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

const {data} = useGetCharactersQuery()

    const SendInfo = (e) =>{
        e.preventDefault()
        dispatch(fullState(search))
        dispatch(modal(true))
        setSearch(' ')
    }
      
 
 

  
  return (
    <div className='  absolute w-[100%] flex flex-col justify-center items-center'>
     
        <form onSubmit={SendInfo}  className=" w-full flex justify-center  items-center   ">
        <input  autoComplete='true' defaultValue={search} onChange={(e)=> setSearch(e.target.value)} className=" relative w-[50vw] z-[999] h-[4vh] bg-[#ffffff3f] text-white mt-[1%] sm:mt-[3%] lg:mt-[1.5%] md:w-[40vw] lg:w-[30vw]" type="text" placeholder='may the force be with you...' /> 
      </form>


    <div className='z-[200] bg-[#585858] w-[50vw] max-h-[10vh] overflow-y-auto md:w-[40vw] lg:w-[30vw] '  id='scrollbar'>
      {
        data?.filter((c)=>{
       const name = c.name.toUpperCase()
       const searchInput = search.toUpperCase()
       return searchInput && name.includes(searchInput)

        })
        .map((c)=>(
          <NavLink to={`/${c.name}`}>

          <div className=' '>
            <h1 className='text-white  hover:bg-[#979696] hover:cursor-pointer'>{c.name}</h1>

          </div>
          </NavLink>
        ))
      }

    </div>


    </div>
  )
}
