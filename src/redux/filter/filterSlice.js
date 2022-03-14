import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        onChangeFilter(state, action) {
           return state = action.payload;
        }
    }
});

export const { onChangeFilter } = filterSlice.actions;