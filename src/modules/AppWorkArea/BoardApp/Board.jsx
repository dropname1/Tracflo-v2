import React from 'react'
import BoardTask from './BoardTask'

export default function Board({board}) {
  return (
    <div className="boardWrapper">
      <div className="boardTitleWrapper">
        <div className="boardTitle">{board.name}</div>
      </div>
      <div className="boardTasksWrapper">
        {board && board.tasks.map( task => <BoardTask task={task} key={task.id}/>)}
      </div>
    </div>
  );
}
