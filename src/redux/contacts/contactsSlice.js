import { createSlice } from "@reduxjs/toolkit";


// export const { increment, decrement } = myValueSlice.actions;
//  const changeFilter = (event) => {
//     setFilter(event.currentTarget.value);
//   };
export const contactsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addNewContact(state, action) {
           state.push(action.payload)
        },
        deleteContact(state, action) {
            return state.filter(item => item.id !== action.payload)
            //contacts.filter((contact) => contact.id !== idContact)
            //() => state.item - action.payload;
        },
    },
});

export const { addNewContact, deleteContact} = contactsSlice.actions;

 