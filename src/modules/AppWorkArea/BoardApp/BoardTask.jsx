import React from 'react'
import Trash from '../../../assets/ui/8.Trash.svg'

export default function BoardTask({task}) {
  return (
    <div className="boardTaskWrapper">
      <div className="boardTaskTitle">{task.title}</div>
      <img src={Trash} alt="" width='15'/>
    </div>
  );
}
