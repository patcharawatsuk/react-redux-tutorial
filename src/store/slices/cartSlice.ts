import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types'

type CartItem = Product & {quantity: number}

type cartState = CartItem[]

export const initialState: cartState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const foundItem = state.find(
                (item) => item.id === action.payload.id
            )

            if (!foundItem) {
                state.push(action.payload)
            } else {
                return state.map((item) => ({
                    ...item,
                    quantity:
                        item.id === foundItem.id
                            ? item.quantity + 1
                            : item.quantity,
                }))
            }
        },
        deleteCart: (state, action: PayloadAction<string>) =>
            state.filter((item) => item.id !== action.payload),
    },
})

// Action creators
export const { addToCart, deleteCart } = cartSlice.actions

// Reducer
export const cartReducer = cartSlice.reducer
