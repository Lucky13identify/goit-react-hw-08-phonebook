import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async object => {
  try {
    const { data } = await axios.post('/users/signup', object);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const login = createAsyncThunk('auth/login', async object => {
  try {
    const { data } = await axios.post('/users/login', object);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (token === null) {
      return state;
    } else {
      token.set(persistToken);
      try {
        const { data } = await axios.get('/users/current');
        return data;
      } catch (e) {}
    }
  }
);
