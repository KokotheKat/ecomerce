import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlices'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { api } from '../service/api'

export const store = configureStore({
  reducer: {
    // productReducer: productSlices.reducer
        product: productReducer,

    // [api.reducerPath]: api.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),
})

// setupListeners(store.dispatch)