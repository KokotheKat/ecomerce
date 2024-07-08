import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const chartSlices = createSlice({
    name: 'chart',
  initialState,
  reducers: {
    addItem: (state,action) => {
     
      state.items.push(action.payload.items)
    },
    removeItem: (state,action) => {
      state.items=state.items.filter(item => item.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = chartSlices.actions

export default chartSlices.reducer