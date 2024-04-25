import { createSlice } from "@reduxjs/toolkit";


// initial state
const initialState = {
    sort: '',
    filter: 'All'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        sortHandle: (state, action) => {
            state.sort = action.payload;
        },
        filterHandle: (state, action) => {
            state.filter = action.payload;
        }
    }
   
})

export default filterSlice.reducer;
export const { sortHandle, filterHandle } = filterSlice.actions;