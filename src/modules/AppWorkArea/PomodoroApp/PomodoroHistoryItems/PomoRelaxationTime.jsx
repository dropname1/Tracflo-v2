import React from 'react'
import { useDispatch } from "react-redux";
import { removePomodoroItem } from '../../../Store/StoreSlieces/PomadoroSlice';

export default function PomoRelaxationTime({pomo, activeApp}) {
  const dispatch = useDispatch()
  return (
    <div className="PomoRelaxationTimeWrapper">
      <div className="pomoRelaxationTimeTitle">Relaxation:</div>
      <div>{pomo.time}</div>
      <div
        className="removePomoRelaxationTimeItem"
        onClick={() =>
          dispatch(removePomodoroItem({ id: pomo.id, activeApp: activeApp }))
        }
      >
        &times;
      </div>
    </div>
  );
}
