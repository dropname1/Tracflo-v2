import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTaskInBoard } from '../../Store/StoreSlieces/BoarsSlice';

export default function AddTask() {

  const dispath = useDispatch()
  const activeApp = useSelector(state => state.ProjectSlice.activeProjectId.payload)

  function addTask (e) {
    if(e.code === 'Enter') {
      dispath(addTaskInBoard({title: e.target.value, activeApp: activeApp}))
    }
  }
  return (
    <div className="BoardAddTaskWrapper">
      <input type="text" className="BoardAddTask" onKeyUpCapture={(e)=> addTask(e)}/>
    </div>
  );
}
