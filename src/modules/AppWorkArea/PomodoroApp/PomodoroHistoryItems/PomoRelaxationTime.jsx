import React from 'react'

export default function PomoRelaxationTime({pomo}) {
  return (
    <div className="PomoRelaxationTimeWrapper">
      <div className="pomoRelaxationTimeTitle">Relaxation:</div>
      <div>{pomo.time}</div>
      <div className="removePomoRelaxationTimeItem">&times;</div>
    </div>
  );
}
