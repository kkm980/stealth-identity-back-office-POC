/**
 * Language slice for Redux store
 * Manages current language selection state
 */

import { createSlice } from '@reduxjs/toolkit';
import type { Language } from '../types';

interface LanguageState {
  current: Language;
}

const initialState: LanguageState = {
  current: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
