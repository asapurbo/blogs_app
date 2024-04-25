import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { relatedPostAPI } from "./relatedPostAPI";

// initial state
const initialState = {
    isLoading: false,
    isError: false,
    relatedPosts: [],
    error: '',
}

// relatedPostFetch
export const relatedPostFetch = createAsyncThunk('relatedPosts/postFatch', async ({id, tags}) => {
    const relatedPosts = await relatedPostAPI({id, tags});
    return relatedPosts;
})

const relatedPostsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(relatedPostFetch.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = ''
            })
            .addCase(relatedPostFetch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.relatedPosts = action.payload;
            })
            .addCase(relatedPostFetch.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
                state.relatedPosts = [];
            })
    } 
})

export default relatedPostsSlice.reducer;