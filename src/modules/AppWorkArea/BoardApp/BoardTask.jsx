import React from "react";
import Trash from "../../../assets/ui/8.Trash.svg";
import EditBoardTask from "./EditBoardTask/EditBoardTask";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeTaskInBoard } from "../../Store/StoreSlieces/BoarsSlice";
import { drag } from "../../Store/StoreSlieces/BoarsSlice";

export default function BoardTask({ task, boardId}) {

  const activeApp = useSelector(
    (state) => state.ProjectSlice.activeProjectId.payload
    );
    const dispatch = useDispatch();

  function dragTask (e, task, boardId) {
    dispatch(drag({task: task, boardId: boardId, activeApp: activeApp}))
  }
  
  function dragOver (e) {
    e.preventDefault();

  }
  function dropTask (e) {
    e.preventDefault();
  }

  return (
    <div
      onDragStart={(e) => dragTask(e, task, boardId)}
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => dropTask(e)}
      draggable={true}
      className="boardTaskWrapper"
    >
      <div className="boardTaskTitle">
        <EditBoardTask task={task} />
      </div>
      <img
        src={Trash}
        alt=""
        width="15"
        className="boardTaskTrash"
        onClick={() =>
          dispatch(
            removeTaskInBoard({
              id: task.id,
              activeApp: activeApp,
              boardId: task.boardId,
            })
          )
        }
      />
    </div>
  );
}
