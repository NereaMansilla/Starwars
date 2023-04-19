
import React from 'react'
import { useState } from 'react'

export const Paginacion = ({currentPage, setCurrentPage, max}) => {
    const [input, setInput]= useState(1)

    const next = () =>{
        setInput(input +1)
        setCurrentPage(currentPage + 1)

        if(currentPage > max){
            setCurrentPage(1)
            setInput(1)
        }
    }

    const prev = () =>{
        setInput(input - 1)
        setCurrentPage(currentPage - 1)

        if(currentPage <= 1){
            setCurrentPage(1)
            setInput(1)
        }
    }
  return (

        <div className='bg-[#000] w-[100%] flex justify-center items-center py-[20px]'>
            
     <button onClick={prev} className='h-auto w-[50px] border-b border-white text-white mr-[10px] hover:bg-[#fff] hover:text-black'>Prev</button>

    
     <input className='w-[5vw] text-center' name='page' value={input} readOnly="readonly" type='text'/>
    
     <p className='text-white ml-[5px]'> de {Math.ceil(max)}</p>
   

     <button onClick={next} className=' h-auto w-[50px] border-b border-white text-white ml-[10px] hover:bg-[#fff] hover:text-black'>Next</button>
        </div>
 
    
  )
}
