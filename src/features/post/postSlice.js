import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postAPI } from "./postAPI";

// initial state
const initialState = {
    isLoading: false,
    isError: false,
    post: [],
    error: '',
}

// postFetch
export const postFetch = createAsyncThunk('post/postFatch', async (id) => {
    const post = await postAPI(id);
    return post;
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postHandle: (state) => {
            state.isSaved = !state.isSaved;
        },
        likeHandle: (state) => {
            state.isSaved = state.likes + 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postFetch.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = ''
            })
            .addCase(postFetch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = '';
                state.post = action.payload;
            })
            .addCase(postFetch.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
                state.post = [];
            })
    } 
})

export default postSlice.reducer;

export const { postHandle, likeHandle } = postSlice.actions;