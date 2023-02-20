import React from 'react'

export default function PomoWorkTime({pomo}) {
  return (
    <div className="PomoWorkTimeWrapper">
      <div className="pomoWorkTimeTitle">Pomadoro: </div>
      <div>{pomo.time}</div>
      <div className="removePomoWorkTimeItem">&times;</div>
    </div>
  );
}
