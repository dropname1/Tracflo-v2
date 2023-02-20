import React from "react";
import AddTask from "./AddTask";
import BoardTask from "./BoardTask";
import CloseInput from "../../Ceneral/clearInput";

export default function BoardWithAddTask({ board }) {
  return (
    <div className="boardWrapper">
      <div className="boardTitleWrapper" style={{ borderBottom: "none", marginBottom: "0px", }} >
        <div className="boardTitle">{board.name}</div>
        <div className="closeInput"><CloseInput /></div>
      </div>
        <AddTask />
      <div className="boardTasksWrapper">
        {board.tasks && board.tasks.map(task => <BoardTask task={task} key={task.id}/>)}
      </div>
    </div>
  );
}
