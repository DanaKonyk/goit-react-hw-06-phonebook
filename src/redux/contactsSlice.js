import { createSlice } from '@reduxjs/toolkit';

// const contactsInitialState = {contacts: []}

const contactsSlice = createSlice({
  name: 'contacts',
 initialState: [],
  reducers: {
    addContact(state, action) {
      console.log('Поточний стан:', state);
state.push(action.payload)
    },
    deleteContact(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
