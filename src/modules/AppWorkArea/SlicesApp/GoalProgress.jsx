import React from 'react'

export default function GoalProgress({ progressState }) {
  return (
    <div className='progressWrapper'>
      <div className='progressStateWrapper'>
        <div className="progressState"></div>
      </div>
      <div className="progressText">
        <div>progress: </div> 
        <div className="progressStateText">{progressState} / 100</div>
      </div>
    </div>
  );
}
