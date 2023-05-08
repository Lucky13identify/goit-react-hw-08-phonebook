import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async data => {
    try {
      const response = await axios.post('/contacts', data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
