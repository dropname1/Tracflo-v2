import React from "react";
import AddTask from "./AddTask";
import BoardTask from "./BoardTask";
import CloseInput from "../../Ceneral/clearInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { drop } from "../../Store/StoreSlieces/BoarsSlice";

export default function BoardWithAddTask({ board, activeApp }) {
  const [closeInput, setCloseInput] = useState(false);

  const dispatch = useDispatch()

  function dropTask(e) {
    e.preventDefault();
    dispatch(drop({ board: board, activeApp: activeApp }));
  }
  return (
    <div className="boardWrapper">
      <div
        className="boardTitleWrapper"
        style={{
          borderBottom: !closeInput ? "1px solid #BCB6B5" : "none",
          marginBottom: !closeInput ? "10px" : "0px",
        }}
      >
        <div className="boardTitle">{board.name}</div>
        <div
          className="closeInput"
          onClick={() => setCloseInput(!closeInput)}
          style={{
            transform: closeInput ? "rotate(0deg)" : "rotate(45deg)",
            transition: "all 0.3s",
          }}
        >
          <CloseInput />
        </div>
      </div>
      {closeInput && <AddTask />}
      <div
        className="boardTasksWrapper"
        style={{height : closeInput? '300px' : '365px'}}
        onDrop={(e) => dropTask(e)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
      >
        {board.tasks &&
          board.tasks.map((task) => (
            <BoardTask task={task} key={task.id} boardId={board.id} />
          ))}
      </div>
    </div>
  );
}
