import React from 'react'
import Trash from '../../../assets/ui/8.Trash.svg'
import EditBoardTask from './EditBoardTask/EditBoardTask'

export default function BoardTask({task}) {
  return (
    <div className="boardTaskWrapper">
      <div className="boardTaskTitle">
        <EditBoardTask task={task}/>
      </div>
      <img src={Trash} alt="" width='15'/>
    </div>
  );
}
