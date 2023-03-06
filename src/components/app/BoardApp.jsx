import React from "react";
import { useSelector } from "react-redux";
import Board from "../../modules/AppWorkArea/BoardApp/Board";
import BoardWithAddTask from "../../modules/AppWorkArea/BoardApp/BoardWithAddTask";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BoardApp({ isActiveApp }) {
  const boardApps = useSelector((state) => state.BoardSlice.boardApps);
  const activeProject = useSelector(
    (state) => state.ProjectSlice.activeProjectId.payload
  );

  const boardApp = (boardApp) => {
    if (boardApp.appId === activeProject) {
      return board(boardApp);
    }
  };

  const board = (boardApp) => {
    return boardApp.boards.map((board) => {
      if (board.hasOwnProperty("hasAddTask")) {
        return (
          <CSSTransition key={board.id} classNames="fade" timeout={250}>
            <BoardWithAddTask
              board={board}
              activeApp={activeProject}
            />
          </CSSTransition>
        );
      } else {
        return (
            <Board key={board.id} board={board} activeApp={activeProject} />
        );
      }
    });
  };

  return (
    <TransitionGroup>
      <CSSTransition key={isActiveApp} classNames="fade2" timeout={250}>
        <div
          className="boardsWrapper"
          style={{
            height: isActiveApp === "Board" ? "initial" : "0",
            overflow: isActiveApp === "Board" ? "initial" : "hidden",
          }}
        >
            {boardApps && boardApps.map(boardApp)}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
