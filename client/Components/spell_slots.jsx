import React from "react";
import { useSelector } from "react-redux";
import Slot from "./slots.jsx";

const SlotList = () => {
  const { slots } = useSelector((state) => state.spells);
  return (
    <div className="spellSlots">
      <p>
        <Slot
          id={slots[0].id}
          spell={slots[0].spell}
          used={slots[0].used}
        />
      </p>
      <p>
        <Slot
          id={slots[1].id}
          spell={slots[1].spell}
          used={slots[1].used}
        />
      </p>
    </div>
  );
};

export default SlotList;


