import React from "react";

const SlotEditor = (
  // props will go here
) => {
  return (
    <div id="slotEditor">
      <input type="text" id="spellInput" value="Enter a Spell from your Spellbook" onChange={() => {
        // props.setLocation(e.target.value);
      }}></input>
      <button
        type="submit"
        onClick={() => {}} 
      >
        Study Spell
      </button>
    </div>
  );
};

export default SlotEditor;
