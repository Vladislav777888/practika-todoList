import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsInitState } from './contacts.init-state';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContactAction: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContactAction(state, { payload }) {
      const index = state.contacts.findIndex(task => task.id === payload);
      state.contacts.splice(index, 1);
    },

    contactsSearchAction(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContactAction, deleteContactAction, contactsSearchAction } =
  contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
