import {startFetch, endFetch, errorFetch} from '../actions/statusActions'
import {signin} from '../data/users'

export const SET_AUTH = 'SET_AUTH';

export const setAuth = (user) => {
    return {
        type : SET_AUTH,
        payload: user
    }
}

//สร้าง action ที่ return thunk function
export function fetchAuthAsync(email, password) {
    return async function(dispatch, getState) {
        //ทำ logic เกี่ยวกับ connect API
        try {
            dispatch(startFetch())
            const user = await signin(email, password)
            if(user) {
                dispatch(setAuth(user))
                dispatch(errorFetch(''))
                dispatch(endFetch())
            }

        } catch (error) {
            dispatch(setAuth(null))
            dispatch(errorFetch(error))
            dispatch(endFetch())
        }
    }
}

