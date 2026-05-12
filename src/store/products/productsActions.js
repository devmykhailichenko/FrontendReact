import { SET_PRODUCTS } from "./productsTypes.js";

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
}