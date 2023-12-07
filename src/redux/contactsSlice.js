import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  users: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.users = [...state.users, action.payload];
    },

    deleteContact(state, action) {
      state.users = state.users.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
