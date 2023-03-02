import React from "react";
import { useDispatch } from "react-redux";
import { removeSlice } from "../../Store/StoreSlieces/SlicesSliece";
import { completedSlice } from "../../Store/StoreSlieces/SlicesSliece";
import EditSliceItem from './EditSliceItem/EditSlicetItem'

export default function SliceTask({ task, activeApp, goalId }) {
  const dispatch = useDispatch();
  return (
    <div className="sliceTaskWrapper">
      <input
      checked={task.completed}
        type="checkbox"
        className="sliceTaskChecbox"
        onChange={() =>
          dispatch(
            completedSlice({
              id: task.id,
              activeApp: activeApp,
              goalId: goalId,
            })
          )
        }
      />
      <div
        className="sliceTaskTitle"
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        
      >
        <EditSliceItem task={task} goalId={goalId} activeApp={activeApp}/>
      </div>
      <div
        className="removeSliceTask"
        onClick={() =>
          dispatch(
            removeSlice({ id: task.id, activeApp: activeApp, goalId: goalId })
          )
        }
      >
        &times;
      </div>
    </div>
  );
}
