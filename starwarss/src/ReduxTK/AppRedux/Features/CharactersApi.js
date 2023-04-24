import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const API = "https://starwars-1jci.vercel.app/"




export const characterApi = createApi({
 reducerPath: "characterApi",
 baseQuery: fetchBaseQuery({baseUrl: API}),
 endpoints: (builder)=>({
    getCharacters: builder.query({
        query: () => "",
        
    }),
    
  searchCharacter: builder.query({
     query: (name) => `/${name}`
  })
    
}), 

})


export const {useGetCharactersQuery, useSearchCharacterQuery} = characterApi