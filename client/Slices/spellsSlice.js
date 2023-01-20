import { createSlice, current, nanoid } from '@reduxjs/toolkit';

// const initialState = {
//   slots: [{ id: nanoid(), spell: 'empty', used: false }, { id: nanoid(), spell: 'empty', used: false }],
//   studiedSpell: '',
//   resting: false
// };
export const spellsSlice = createSlice({
  name: 'spellSlots',
  initialState: {
    slots: [{ id: nanoid(), spell: null, used: false }, { id: nanoid(), spell: null, used: false }],
    studiedSpell: '',
    resting: false
  },
  reducers: {
    spellAdd: (state, action) => {
      // this will update the spell property of the first empty slot
      for (let i = 0; i < state.slots.length; i++) {
        if (!state.slots[i].spell) {
          state.slots[i].spell = state.studiedSpell;
          state.studiedSpell = '';
          break;
        }
      }
    },
    spellUse: (state, action) => {
      // this will set the use status of the spell on which it is clicked to true
      const slots = state.slots;
      const spellSlot = slots.find((el) => el.id === action.payload);
      if (!spellSlot.used){
        spellSlot.used = true;
        spellSlot.spell += ' SPENT';
      }
    },
    spellRemove: (state, action) => {
      // this will need to empty a spell slot
      if (state.resting){
        const slots = state.slots;
        const spellSlot = slots.find((el) => el.id === action.payload);
        spellSlot.spell = null;
      }
    },
    spellStudy: (state, action) => {
      // this will update the "studiedSpell" state when the user inputs text
      state.studiedSpell = action.payload;
    },
    longRest: (state, action) => {
      const slots = state.slots;
      slots.forEach((el) => {
        if (el.spell){
          el.used = false;
          el.spell = el.spell.replace(' SPENT','');
        }
      });
    },
    restAndPrepare: (state, action) => {
      state.resting = true;
    } 
  },
});

export const { spellAdd, spellUse, spellRemove, spellStudy, longRest, restAndPrepare } = spellsSlice.actions;
export default spellsSlice.reducer;
