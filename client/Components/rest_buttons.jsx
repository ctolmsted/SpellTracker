import React from 'react';
import { useDispatch } from 'react-redux';
import { longRest, restAndPrepare } from '../Slices/spellsSlice.js';

const RestButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className='row' id="restButtons">
      <span className='col w-100 p-3'>
        <button
          className="btn btn-success"
          id="longRestButton"
          type="submit"
          onClick={() => {dispatch(longRest());}} 
        >
          Long Rest
        </button>
      </span>
      <span className='col w-100 p-3'>
        <button
          className="btn btn-outline-success"
          id="restPrepareButton"
          type="submit"
          onClick={() => {dispatch(restAndPrepare());}} 
        >
          Rest & Prepare
        </button>
      </span>
    </div>
  );
};

export default RestButtons;