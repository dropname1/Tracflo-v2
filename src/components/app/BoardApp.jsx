import React from "react";
import { useSelector } from "react-redux";
import Board from "../../modules/AppWorkArea/BoardApp/Board";
import BoardWithAddTask from "../../modules/AppWorkArea/BoardApp/BoardWithAddTask";

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
          <BoardWithAddTask
            board={board}
            key={board.id}
            activeApp={activeProject}
          />
        );
      } else {
        return <Board board={board} key={board.id} activeApp={activeProject} />;
      }
    });
  };

  return (
    <div
      className="boardsWrapper"
      style={{
        height: isActiveApp === "Board" ? "initial" : "0",
        overflow: isActiveApp === "Board" ? "initial" : "hidden",
      }}
    >
      {boardApps && boardApps.map(boardApp)}
    </div>
  );
}
