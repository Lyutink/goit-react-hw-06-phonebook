import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
    name: 'myValue',
    initialState: 100,
    reducers: {
        increment(state, action) {
            return state + action.payload
        },
        decrement(state, action) {
            return state - action.payload
        },
    },
});

export const { increment, decrement } = myValueSlice.actions;

//export const increment = createAction('myValue/increment');
//export const decrement = createAction('myValue/decrement');

//console.log(increment.toString());

// const myReducer = createReducer(10, {
//     [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// });
const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducer: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        }
    }
})

export const { add, temove } = itemSlice.actions;

export const store = configureStore({
    reducer: {
        myValue: myValueSlice.reducer,
        items: itemSlice.reducer,
    },
})