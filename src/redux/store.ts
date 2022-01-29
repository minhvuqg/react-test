import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import productSlice from './reducers/productSlice'

const customizedMiddleware: any = getDefaultMiddleware({
  serializableCheck: false
})

const persistedReducer: any = combineReducers({
  cart: productSlice
})

export default configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware
})
