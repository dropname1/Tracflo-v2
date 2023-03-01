import React from "react";
import { useDispatch } from "react-redux";
import { removeSlice } from "../../Store/StoreSlieces/SlicesSliece";
import { completedSlice } from "../../Store/StoreSlieces/SlicesSliece";

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
        {task.title}
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
