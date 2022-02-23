import { configureStore } from "@reduxjs/toolkit";
//import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
//import { myValueSlice } from "./contacts/contactsSlice";
//import { itemSlice } from "./items/slice";
import { contactsSlice } from "./contacts/contactsSlice";

// export const store = configureStore({
//     reducer: {
//         myValue: myValueSlice.reducer,
//         items: itemSlice.reducer,
//     },
// })

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
    },
});