
import React from 'react'
import { useGetMoviesQuery } from '../../ReduxTK/AppRedux/Features/MoviesApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { NavLink } from 'react-router-dom';
import { getId } from '../../ReduxTK/AppRedux/Features/searchbarSlice';
import { useDispatch } from 'react-redux';
import { loading } from '../../ReduxTK/AppRedux/Features/searchbarSlice';



export const Carrusel = () => {
    const {data, isLoading} = useGetMoviesQuery()
   const dispatch = useDispatch()
 const sendId = (id) =>{

 dispatch(getId(id))
 }


if(isLoading) return null
 

  return (
  
    <div className=' w-[100%] flex justify-center items-center  sm:h-[40vh] md:h-[50vh] lg:h-[50vh] bg-[#5353538c] mt-[10%] mb-[10px] lg:mt-[5%] '>
        
    <div className='mb-[50px] mt-[50px]  w-[100%]  sm:w-[90vw] lg:w-[80vw]'>
        <h1 className='text-[#fff] text-[20px] text-start  w-[20vw] ml-[5px]'>Peliculas:</h1>
      <Swiper
     
      navigation={true}
      spaceBetween={2}
      breakpoints={{
        641: {
            slidesPerView: 1,
        },
        642: {
            slidesPerView: 3,
        },
    }}
     modules={[EffectFlip, Pagination, Navigation]}
      >
        {
            data?.map((c)=>(
                <SwiperSlide key={c.id}>
                    <div onClick={()=> sendId(c.id)} className=' w-[100%]  flex justify-center items-center lg:w-auto sm:w-auto'>
                      <NavLink to='/movies'>
                    <img className='w-[200px] h-[300px] rounded-md object-contain hover:cursor-pointer  hover:w-[205px] hover:h-[305px]  sm:w-[250px] sm:h-[250px] sm:hover:w-[255px] sm:hover:h-[255px]  lg:object-contain lg:w-[200px] lg:h-[300px]  lg:hover:w-[202px] lg:hover:h-[302px]  ' src={c.image} alt='aa'/>
                      </NavLink>
                    </div>
                    </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
   
    </div>
  )
}
