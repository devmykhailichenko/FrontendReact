import { createSlice } from "@reduxjs/toolkit";

import { productsData } from "../../data/products.js";

const initialState = {
    products: productsData,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
    }
});

export const {
    setProducts
} = productsSlice.actions;

export default productsSlice.reducer;