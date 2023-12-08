import { createSlice } from '@reduxjs/toolkit';
import {initialState} from './initialState'

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    setFilterdContacts(state, action) {
      return action.payload ;
    },
  },
});


export const { setFilterdContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;