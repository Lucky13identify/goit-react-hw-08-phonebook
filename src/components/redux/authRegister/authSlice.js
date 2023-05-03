import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const autsSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});
