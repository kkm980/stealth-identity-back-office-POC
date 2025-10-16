/**
 * Redux store configuration
 * Sets up the Redux Toolkit store with theme and language slices
 */

import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import languageReducer from './languageSlice';
import selectedModuleReducer from './selectedModuleSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    selectedModule: selectedModuleReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
