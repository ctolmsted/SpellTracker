import { configureStore } from "@reduxjs/toolkit";
import spellsReducer from "./Slices/spellsSlice";
import { nanoid } from "nanoid";

const reducer = {
  spells: spellsReducer,
};

const preloadedState = {
  slots: [{ id: nanoid(), spell: "empty", used: false }],
  studiedSpell: "Hello",
};

const store = configureStore({
  reducer,
  // preloadedState,
  
});

export default store;
