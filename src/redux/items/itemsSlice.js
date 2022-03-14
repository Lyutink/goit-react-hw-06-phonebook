import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addNewContact(state, action) {
           state.push(action.payload)
        },
        deleteContact(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
    },
});

export const { addNewContact, deleteContact} = itemsSlice.actions;

 