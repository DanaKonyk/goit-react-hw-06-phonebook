import { createSlice } from '@reduxjs/toolkit';
import {initialState} from './initialState'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState, 
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
