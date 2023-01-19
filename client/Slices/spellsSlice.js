import { createSlice, current, nanoid } from '@reduxjs/toolkit';

export const spellsSlice = createSlice({
  name: 'spellSlots',
  initialState: {
    slots: [{ id: nanoid(), spell: 'empty', used: false }, { id: nanoid(), spell: 'empty', used: false }],
    studiedSpell: '',
    resting: false,
    testCount: 0
  },
  reducers: {
    spellAdd: (state, action) => {
      // this will update the spell property of the first empty slot
      console.log('We are in spellAdd');
      console.log(state);
      console.log(action);
      for (let i = 0; i < state.slots.length; i++) {
        if (state.slots[i].spell === 'empty') {
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
      spellSlot.used = true;
    },
    spellRemove: (state, action) => {
      // this will need to empty a spell slot
      const slots = state.slots;
      const spellSlot = slots.find((el) => el.id === action.payload);
      spellSlot.spell = 'empty';
    },
    spellStudy: (state, action) => {
      // this will update the "studiedSpell" state when the user inputs text
      console.log('we are now in spellStudy');
      console.log(current(state));
      // state.testCount = state.testCount + 1;
      // console.log(action);
      // state.studiedSpell = action.payload;
      // console.log(current(state));
      return {...state, studiedSpell: action.payload};
    },
    longRest: (state, action) => {
      const slots = state.slots;
      slots.forEach((el) => {el.used = false;});
    },
    restAndPrepare: (state, action) => {
      state.resting = true;
    }
  },
});

export const { spellAdd, spellUse, spellRemove, spellStudy, longRest, restAndPrepare } = spellsSlice.actions;
export default spellsSlice.reducer;
