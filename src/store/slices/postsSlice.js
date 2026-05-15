import { createSlice } from '@reduxjs/toolkit';

import { getPosts, createPost, getPostById } from "../thunks/postsThunk.js";

const initialState = {
    items: [],
    selectedPost: null,
    loading: false,
    error: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        clearSelectedPost(state) {
            state.selectedPost = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getPostById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedPost = action.payload;
            })
            .addCase(getPostById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const {
    clearSelectedPost
} = postsSlice.actions;

export default postsSlice.reducer;