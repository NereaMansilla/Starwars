
import { createSlice  } from '@reduxjs/toolkit'

 




const searchBar= createSlice({
 name: 'searchBar',
 initialState:{
    id: null,
 },
 reducers:{

    getId: (state, {payload})=>{
      state.id = payload
    },
    
 },

})


export default searchBar.reducer
export const {fullState, modal, getId} = searchBar.actions

