import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "./postsAPI";
import { updatePostAPI } from '../updatePost/updatePostAPI';
import { updateLikeAPI } from "../updatePost/updateLikeAPI";

// initial state
const initialState = {
    isLoading: false,
    isError: false,
    posts: [],
    error: '',
}

// postFetch
export const postFetch = createAsyncThunk('posts/postFatch', async () => {
    const posts = await postsAPI();
    return posts;
})
export const updateAPI = createAsyncThunk('posts/updatePostAPI', async ({id, isSaved}) => {
    const posts = await updatePostAPI({id, isSaved});
    return posts;
})

export const updateLike = createAsyncThunk('posts/updateLikeAPI', async ({id, likes}) => {
    const posts = await updateLikeAPI({id, likes});
    return posts;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(postFetch.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        })
        .addCase(postFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.posts = action.payload;
        })
        .addCase(postFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
            state.posts = [];
        })
        .addCase(updateAPI.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        })
        .addCase(updateAPI.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.posts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload;
                }
                return post;
            });
        })
        .addCase(updateAPI.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
        .addCase(updateLike.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        })
        .addCase(updateLike.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.posts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload;
                }
                return post;
            });
        })
        .addCase(updateLike.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
    } 
})

export default postsSlice.reducer;