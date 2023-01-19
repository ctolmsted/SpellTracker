import React, { Component } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Slots from '../Components/spell_slots.jsx';
import SlotEditor from '../Components/slot_editor.jsx';
import RestButtons from '../Components/rest_buttons.jsx';
// import { spellAdd, spellToggle, spellRemove } from '../Slices/spellsSlice.js';

const PreparedSpells = () => {
  return (
    <div id="preparedSpells">
      <h1>Prepared Spells</h1>
      <div>
        <Slots />
      </div>
      <div>
        <SlotEditor />
      </div>
      <div>
        <RestButtons />
      </div>
    </div>
  );
};

export default PreparedSpells;
