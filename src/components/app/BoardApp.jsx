import React from 'react'
import { useSelector } from 'react-redux'
import Board from '../../modules/AppWorkArea/BoardApp/Board'
import BoardWithAddTask from '../../modules/AppWorkArea/BoardApp/BoardWithAddTask'

export default function BoardApp() {

const boardApps = useSelector(state => state.BoardSlice.boardApps)
const activeProject = useSelector(state => state.ProjectSlice.activeProjectId.payload)

const boardApp = (boardApp) => {
   if (boardApp.appId === activeProject) {
     return board(boardApp)
   }
 };

const board = (boardApp) => {
  return boardApp.boards.map((board) => {
    if(board.hasOwnProperty('hasAddTask')) {
      return <BoardWithAddTask board={board} key={board.id}/>
    } else {
      return <Board board={board} key={board.id} />;
    }
  } )
}


  return (
    <div className='boardsWrapper'>
      {boardApps && boardApps.map(boardApp)}
    </div>
  )
}
