import React from 'react'
import { useDispatch } from "react-redux";
import { removePomodoroItem } from '../../../Store/StoreSlieces/PomadoroSlice';

export default function PomoWorkTime({pomo, activeApp}) {
  const dispatch = useDispatch();

  return (
    <div className="PomoWorkTimeWrapper">
      <div className="pomoWorkTimeTitle">Pomadoro: </div>
      <div>{pomo.time}</div>
      <div
        className="removePomoWorkTimeItem"
        onClick={() =>
          dispatch(removePomodoroItem({ id: pomo.id, activeApp: activeApp }))
        }
      >
        &times;
      </div>
    </div>
  );
}

 