import React from 'react';
import { useDispatch } from 'react-redux';
import { longRest, restAndPrepare } from '../Slices/spellsSlice.js';

const RestButtons = () => {
  const dispatch = useDispatch();
  return (
    <div id="restButtons">
      <span>
        <button
          id="longRestButton"
          type="submit"
          onClick={() => {dispatch(longRest());}} 
        >
          Long Rest
        </button>
      </span>
      <span>
        <button
          id="restPrepareButton"
          type="submit"
          onClick={() => {dispatch(restAndPrepare())}} 
        >
          Rest & Prepare
        </button>
      </span>
    </div>
  );
};

export default RestButtons;