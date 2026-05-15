import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
      try {
          const response = await fetch(API_URL);

          if(!response.ok) {
              return thunkAPI.rejectWithValue("Failed to fetch posts.");
          }

          return await response.json();
      } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
      }
  }
);

export const getPostById = createAsyncThunk(
    "posts/getPostById",
    async (postId, thunkAPI) => {
        console.log("POST ID", postId);

        try {
            const response = await fetch(`${API_URL}/${postId}`);

            if(!response.ok) {
                return thunkAPI.rejectWithValue("Failed to fetch post.");
            }

            return await response.json();
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const createPost = createAsyncThunk(
    "posts/createPost",
    async (newPost, thunkAPI) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newPost),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!response.ok) {
                return thunkAPI.rejectWithValue("Failed to create post.");
            }

            return await response.json();
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);