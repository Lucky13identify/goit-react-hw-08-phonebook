// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { autsSlice } from '../redux/authRegister/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
      console.log(action.payload);
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.error = action.payload;
    },

    [addContact.pending](state, action) {
      state.contacts.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.items.push(action.payload);
    },
    // [addContact.rejected](state, action) {
    //   state.contacts.items.push(action.meta.arg);
    // },

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
});

export const persistor = persistStore(store);

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addContact': {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }

//     case 'tasks/changeFilter': {
//       return { ...state, filter: action.payload };
//     }
//     case 'tasks/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//   }

//   return state;
// };

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
