import { createSlice } from '@reduxjs/toolkit';


const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
 initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      console.log('Current state:', state);
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    deleteContact(state, action) {
      return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
