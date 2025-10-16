/**
 * Selected Module slice for Redux store
 * Manages current Module selection state
 */

import { createSlice } from '@reduxjs/toolkit';
import type { Modules } from '../types';

interface ModuleState {
  current: Modules;
}

const initialState: ModuleState = {
  current: 'Home',
};

const currentModuleSlice = createSlice({
  name: 'currentModule',
  initialState,
  reducers: {
    setCurrentModule: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentModule } = currentModuleSlice.actions;
export default currentModuleSlice.reducer;