import { commerce } from "../../lib/commerce"
import { FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE, CART_ADD, CART_UPDATE} from "./cartTypes"

export const fetchCartRequest = () => {
    return {
        type: FETCH_CART_REQUEST
    }
}

export const fetchCartSuccess = (products) => {
    return {
        type: FETCH_CART_SUCCESS,
        payload: products
    }
}

export const fetchCartFailure = (error) => {
    return {
        type: FETCH_CART_FAILURE,
        payload: error
    }
}

export const cartAddRequest = () => {
    return {
        type: CART_ADD
    }
}

export const cartUpdateRequest = () => {
    return {
        type: CART_UPDATE
    }
}


export const fetchCart = () => {
    return async (dispatch) => {
        dispatch(fetchCartRequest())
        try{
            const data = await commerce.cart.retrieve();
            dispatch(fetchCartSuccess(data))
        }catch(err){
            dispatch(fetchCartFailure(err.message))
        }
    }
}

export const cartAdd = (productId, quantity = 1) => {
    return async (dispatch) => {
        dispatch(cartAddRequest())
        try{
            const { cart } = await commerce.cart.add(productId, quantity)
            dispatch(fetchCartSuccess(cart))
        }catch(err){
            dispatch(fetchCartFailure(err.message))
        }
    }
}

export const cartUpdate = (productId, quantity) => {
    return async (dispatch) => {
        dispatch(cartUpdateRequest())
        try{
            const { cart } = await commerce.cart.update(productId, { quantity })
            dispatch(fetchCartSuccess(cart))
        }catch(err){
            dispatch(fetchCartFailure(err.message))
        }
    }
}
