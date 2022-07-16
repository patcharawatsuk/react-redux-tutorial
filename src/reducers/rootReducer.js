import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
import { statusReducer } from "./statusReducer";

export const rootReducer = combineReducers({
    cart : cartReducer,
    auth : authReducer,
    status : statusReducer
})

/* state format
{
    cart : [],
    auth : {
        user : null
    },
    status : {
        loading : false,
        error: ''
    }
}
*/