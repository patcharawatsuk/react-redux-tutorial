import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const cartSlice =  createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const existItem = state.find(item => item.id === action.payload.id);
            if (!existItem) {
                state.push(action.payload)
            } else {
                return state.map(item => {
                    return (
                        {
                            ...item,
                            quantity: item.id === existItem.id ? item.quantity + 1 : item.quantity
                        }
                    )
                })
            }
        },
        deleteCart: (state, action) => state.filter(({id}) => id !== action.payload)
    }
})

//ได้ action creator กับ reducer จาก createSlice

//action creator
export const {addToCart, deleteCart} = cartSlice.actions

//reducer
export const cartReducer = cartSlice.reducer