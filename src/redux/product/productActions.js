import { commerce } from "../../lib/commerce"
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from "./productTypes"

export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = (products) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: products
    }
}

export const fetchProductFailure = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductRequest())
        try{
            const { data } = await commerce.products.list();
            dispatch(fetchProductSuccess(data))
        }catch(err){
            dispatch(fetchProductFailure(err.message))
        }
    }
}