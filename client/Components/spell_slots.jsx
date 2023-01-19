import React from 'react';
import { useSelector } from 'react-redux';
import Slot from './slots.jsx';

const SlotList = () => {
  const { slots } = useSelector((state) => state.spells);
  return (
    <div className="spellSlots">
      <div>
        <Slot
          id={slots[0].id}
        />
      </div>
      <div>
        <Slot
          id={slots[1].id}
        />
      </div>
    </div>
  );
};

export default SlotList;


