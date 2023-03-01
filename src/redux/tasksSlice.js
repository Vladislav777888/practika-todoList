import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },

    toggleCompleted(state, action) {
      // eslint-disable-next-line array-callback-return
      state.map(task => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      });
    },
  },
});

export const { addTask, toggleCompleted } = tasksSlice.actions;
const tasksReducer = tasksSlice.reducer;

const persistConfig = {
  key: 'tasks',
  storage,
  whitelist: ['tasks'],
};

const mainReducer = combineReducers({
  tasks: tasksReducer,
});

export const persistedReducer = persistReducer(persistConfig, mainReducer);
