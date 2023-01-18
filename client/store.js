import { configureStore } from '@reduxjs/toolkit';
import spellsReducer from './Slices/spellsSlice';

const store = configureStore({
  reducer: {
    spells: spellsReducer
  }
});

export default store;