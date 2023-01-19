import React from 'react';
import { spellStudy, spellAdd } from '../Slices/spellsSlice.js';
import { useSelector, useDispatch } from 'react-redux'; 

const SlotEditor = () => {
  const dispatch = useDispatch();
  // const { studiedSpell } = useSelector(state => state);
  return (
    <div id="slotEditor">
      <input
        type="text"
        id="spellInput"
        placeholder="Enter a Spell from your Spellbook"
        onChange={(e) => {dispatch(spellStudy(e.target.value));}}
      ></input>
      <button
        type="submit"
        onClick={() => {dispatch(spellAdd({}));}}
      >
          Study Spell
      </button>
    </div>
  );
};

export default SlotEditor;
