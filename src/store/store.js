import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/counterReducer.js";
import { cartReducer } from "./cart/cartReducer.js";
import { productsReducer } from "./products/productsReducer.js";

export const rootReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer,
    products: productsReducer,
});

export const store = createStore(rootReducer);

