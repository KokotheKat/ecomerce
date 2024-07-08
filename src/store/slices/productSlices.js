import { createSlice, } from '@reduxjs/toolkit'
import productData from './productData';
// export const fetchProducts = createAsyncThunk ('products/fetchProducts', async ()=>{
//   console.log("aadsdadawadadaw")
//   const response = await fetch("https://jsonplaceholder.typicode.com/users")
//   if(!response.ok){
//     throw new Error("Failed to fetch data")
//   }
//   return response.json
// })

// const initialState = {
// items: []
// ,status: "loading"
// }
const initialState = [productData]

export const productSlices = createSlice({
  name: 'products',
  initialState,
  reducers: {

  }
  // , extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProducts.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.items = action.payload;
  //     })
  //     .addCase(fetchProducts.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  // }, 
})

// export const {  } = counterSlice.actions

export default productSlices.reducer;