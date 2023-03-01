import React from 'react'
import { useDispatch } from 'react-redux'
import { removeGoal } from '../../Store/StoreSlieces/SlicesSliece'

export default function GoalContextmenu({ goal, activeApp, isAddSliceOpen }) {
  const dispatch = useDispatch();
  return (
    <div className="goalContextMenuWrapper">
      <div className="AddSlice" onClick={() => isAddSliceOpen()}>
        add slice
      </div>
      <div
        className="RemoveGoal"
        onClick={() =>
          dispatch(removeGoal({ id: goal.id, activeApp: activeApp }))
        }
      >
        remove goal
      </div>
    </div>
  );
}
