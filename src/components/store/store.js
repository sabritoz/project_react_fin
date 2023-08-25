import { configureStore } from '@reduxjs/toolkit'
import julerySlice from './julerySlice'

export const store = configureStore({
  reducer: {counter:julerySlice},
})