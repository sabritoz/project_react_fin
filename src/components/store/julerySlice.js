import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addvalue:(state,action)=>{
      state.value=[...state.value,action.payload]
    }
  },
})

export const {addvalue} = counterSlice.actions

export default counterSlice.reducer