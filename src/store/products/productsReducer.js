import { SET_PRODUCTS } from "./productsTypes.js";

const initialState = {
    products: [],
};

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state;
    }
}