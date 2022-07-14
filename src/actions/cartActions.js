export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_CART = 'DELETE_CART';

export const addToCart = (addedProduct) => {
    return {
        type: ADD_TO_CART,
        payload: addedProduct
    }
}

export const deleteCart = (productId) => {
    return {
        type: DELETE_CART,
        payload: productId
    }
}