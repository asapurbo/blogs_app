import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/postsFetch/postsSlice';
import postReducer from '../features/post/postSlice';
import relatedPostReducer from "../features/relatedPost/relatedPostSlice";
import filterReducer from '../features/filter/filterSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        post: postReducer,
        relatedPost: relatedPostReducer,
        filter: filterReducer
    }
})

export default store;