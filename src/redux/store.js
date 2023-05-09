import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { autsSlice } from './authRegister/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };

const contactsRed = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.error = action.payload;
    },

    [addContact.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.items.push(action.payload);
    },
    [deleteContact.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;

      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.contacts.error = action.payload;
    },
  },
});

export const { changeFilter } = contactsRed.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsRed.reducer,
    auth: persistReducer(authPersistConfig, autsSlice.reducer),
  },
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
