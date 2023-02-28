import React from "react";
import BoardTask from "./BoardTask";
import { useDispatch } from "react-redux";
import { drop } from "../../Store/StoreSlieces/BoarsSlice";

export default function Board({ board, activeApp }) {
  const dispatch = useDispatch();

  function dropTask(e) {
    e.preventDefault();
    dispatch(drop({board: board, activeApp: activeApp}));
  }
  return (
    <div className="boardWrapper">
      <div className="boardTitleWrapper">
        <div className="boardTitle">{board.name}</div>
      </div>
      <div
        className="boardTasksWrapper"
        onDrop={(e) => dropTask(e)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e)=> e.preventDefault()}
      >
        {board &&
          board.tasks.map((task) => (
            <BoardTask task={task} key={task.id} boardId={board.id} />
          ))}
      </div>
    </div>
  );
}
