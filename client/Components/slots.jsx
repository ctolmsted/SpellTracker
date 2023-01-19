import React from 'react';
import { useSelector } from 'react-redux';
 
const Slot = (props) => {
  const { id } = props;
  const { slots } = useSelector((state) => state.spells);
  const thisSlot = slots.find((el) => el.id === id);
  return (
    <div className="spellSlot">
      <span>{thisSlot.spell}</span>
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