import React from "react";
import BoardTask from "./BoardTask";
import { useDispatch } from "react-redux";
import { drop } from "../../Store/StoreSlieces/BoarsSlice";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
        onDragEnter={(e) => e.preventDefault()}
      >
        <TransitionGroup>
          {board &&
            board.tasks.map((task) => (
              <CSSTransition key={task.id} classNames='fade' timeout={250}>
                <BoardTask task={task} boardId={board.id} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </div>
  );
}
