import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const spellsSlice = createSlice({
  name: 'spellSlots',
  initialState: [
    { id: nanoid(), slotOne: { spell: 'empty', used: false } },
    { id: nanoid(), slotTwo: { spell: 'empty', used: false } },
  ],
  reducers: {
    spellAdd(state, action) {
      // this will need to update the spell property of an empty slot
    },
    spellToggle(state, action) {
      // this will need to toggle the use status of the spell on which it is clicked.
      // sample clode here from documentation
      // const spellSlot = state.find((spell) => spell.id === action.payload);
      // spellSlot.completed = !spellSlot.completed;
    },
    spellRemove(state, action){
      // this will need to empty a spell slot
    }
  },
});

export const { spellAdd, spellToggle, spellRemove } = spellsSlice.actions;
export default spellsSlice.reducer;
