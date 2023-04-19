import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const API = "http://localhost:3001/"



export const moviesApi = createApi({
 reducerPath: "moviesApi",
 baseQuery: fetchBaseQuery({baseUrl: API}),
 endpoints: (builder)=>({
    getMovies: builder.query({
        query: () => "movies",
        
    }),
    
  getMoviesId: builder.query({
     query: (id) => `movies/${id}`
  })
    
}), 

})

export const {useGetMoviesQuery} = moviesApi
export const {useGetMoviesIdQuery} = moviesApi