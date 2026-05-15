import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice.js";
import productsReducer from "./slices/productsSlice.js";
import cartReducer from "./slices/cartSlice.js";
import postsReducer from "./slices/postsSlice.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer,
        cart: cartReducer,
        posts: postsReducer,
    }
});

