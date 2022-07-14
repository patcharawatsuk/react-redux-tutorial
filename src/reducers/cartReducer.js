import { ADD_TO_CART, DELETE_CART } from "../actions/cartActions"

const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let updatedCart;
            const existItem = state.cart.find(item => item.id === action.payload.id);
            if (!existItem) {
                updatedCart = [...state.cart, action.payload];
            } else {
                updatedCart = state.cart.map(item => {
                    return (
                        {
                            ...item,
                            quantity: item.id === existItem.id ? item.quantity + 1 : item.quantity
                        }
                    )
                })
            }
            return ({
                ...state,
                cart: updatedCart
            })
        
        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter(({id}) => id !== action.payload)
            }

        default:
            return state
    }
}