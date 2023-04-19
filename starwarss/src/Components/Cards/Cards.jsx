
import React from 'react'
import { useGetCharactersQuery } from '../../ReduxTK/AppRedux/Features/CharactersApi'
import './Cards.css'
import { Card } from '../Card/Card'
import { useState} from 'react'
import { Paginacion } from '../Paginacion/Paginacion'
import { Loading } from '../Loading/Loading'


export const Cards = () => {
    const {data, isLoading} = useGetCharactersQuery()
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(12)


    if(isLoading) return <div className='h-[100vh] w-[100%]'></div>
    const max = data.length / perPage

   
  
  return (
    <div>

    <div className='grid grid-cols-1  justify-items-center gap-y-8 overflow-x-hidden sm:grid sm:grid-cols-3 sm:py-[20px]   md:grid md:grid-cols-3  lg:grid lg:grid-cols-4'>
       {
        data?.slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage)
        .map((c)=>(
           <Card c={c} key={c.id} />
        ))
       } 
    </div>


<Paginacion currentPage={currentPage} setCurrentPage={setCurrentPage} max={max}/>
 
    </div>
  )
    }
