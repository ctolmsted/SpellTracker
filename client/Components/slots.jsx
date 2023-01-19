import React from 'react';

const Slot = () => {
  return (
    <div className="spellSlot">
      <span>Empty</span>
      <span>
        <button onClick={() => {}}>Use</button>
      </span>
      <span>
        <button onClick={() => {}}>Clear Slot</button>
      </span>
    </div>
  );
};

export default Slot;