import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsInitState } from './contacts.init-state';
import { contactsReducer } from './contactsSlice';

// const initState = {
//   contacts: contactsInitState,
// };

export const store = configureStore({
  preloadedState: contactsInitState,
  devTools: true,
  reducer: contactsReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
