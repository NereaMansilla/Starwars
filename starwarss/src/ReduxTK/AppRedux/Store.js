import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { characterApi } from './Features/CharactersApi.js'
import searchBarReducer from  './Features/searchbarSlice.js'
import { moviesApi } from './Features/MoviesApi.js'
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [characterApi.reducerPath]: characterApi.reducer,
    search: searchBarReducer,
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware).concat(moviesApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)


