import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { spellUse, spellRemove } from '../Slices/spellsSlice.js';

const Slot = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const { slots, resting } = useSelector((state) => state.spells);
  const thisSlot = slots.find((el) => el.id === id);
  return (
    <div className="spellSlot">
      <span className="border w-50 testclass">{thisSlot.spell}</span>
      <span>
        <button
          className="btn btn-primary"
          data-bs-toggle="button"
          onClick={() => {
            dispatch(spellUse(id));
          }}
        >
          Use
        </button>
      </span>
      <span>
        <button
          className="btn btn-warning"
          onClick={() => {
            dispatch(spellRemove(id));
          }}
        >
          Clear Slot
        </button>
      </span>
    </div>
  );
};

export default Slot;
