import React from 'react';
import { spellStudy, spellAdd } from '../Slices/spellsSlice.js';
import { useDispatch } from 'react-redux'; 

const SlotEditor = () => {
  const dispatch = useDispatch();
  // const { studiedSpell } = useSelector(state => state);
  return (
    <div className='row' id="slotEditor">
      <input
        className='col'
        type="text"
        id="spellInput"
        placeholder="Enter a Spell from your Spellbook"
        onChange={(e) => {dispatch(spellStudy(e.target.value));}}
      ></input>
      <button
        className='col-xs btn btn-success'
        type="submit"
        onClick={() => {
          dispatch(spellAdd({}));
          const spellInput = document.getElementById('spellInput');
          spellInput.value = '';
        }}
      >
          Study Spell
      </button>
    </div>
  );
};

export default SlotEditor;
