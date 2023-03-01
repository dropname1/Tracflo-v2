import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react'

export default function GoalProgress({ progressState, slices }) {

  function computedProgress() {
    if(slices.length > 0) {
      let oneProcent = 100 / slices.length;
      let completedSlices = slices.filter((slice) => slice.completed === true);
      return Math.round(completedSlices.length * oneProcent);
    } return 0
    
  }
  return (
    <div className="progressWrapper">
      <div className="progressStateWrapper">
        <div
          className="progressState"
          style={{ width: `${computedProgress() * 2}px` }}
        ></div>
      </div>
      <div className="progressText">
        <div>progress: </div>
        <div className="progressStateText">{computedProgress()} / 100</div>
      </div>
    </div>
  );
}
