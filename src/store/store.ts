import { configureStore } from '@reduxjs/toolkit'


import {cartReducer} from './slices/cartSlice'
import {authReducer} from './slices/authSlice'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import { initialState as cartInit } from '../store/slices/cartSlice'
import { initialState as authInit} from '../store/slices/authSlice'


const preloadedState = {
    cart: cartInit,
    auth: authInit,
  }

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },
    preloadedState,
});

// { cart: [], auth: { user: null, loading: false, error: '' } }
type RootState = ReturnType<typeof store.getState> //type ของ state  //บอก type ที่ function นี้ return
type AppDispatch = typeof store.dispatch //type ของ dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

