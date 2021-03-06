import { FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE, CART_ADD, CART_UPDATE, CART_REMOVE } from "./cartTypes"

const initialState = {
    loading: false, 
    btnLoading: false,
    cart: [],
    error: ""
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CART_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_CART_SUCCESS:
            return{
                loading: false,
                btnLoading: false,
                cart: action.payload,
                error: ""
            }
        case FETCH_CART_FAILURE:
            return{
                loading: false,
                btnLoading: false,
                cart: [],
                error: action.payload
            }
        case CART_ADD:
            return{
                ...state,
                btnLoading: true
            }
        case CART_UPDATE:
            return{
                ...state,
                btnLoading: true
            }
        case CART_REMOVE:
            return{
                ...state,
                btnLoading: true
            }
        default: return state
    }
}

export default cartReducer