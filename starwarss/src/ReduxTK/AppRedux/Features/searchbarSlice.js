
import { createSlice  } from '@reduxjs/toolkit'

 




const searchBar= createSlice({
 name: 'searchBar',
 initialState:{
    id: null,
    loading: ''
 },
 reducers:{

    getId: (state, {payload})=>{
      state.id = payload
    },
    loading: (state, {payload})=>{
      state.loading = payload
    }
    
 },

})


export default searchBar.reducer
export const {fullState, modal, getId, loading} = searchBar.actions

