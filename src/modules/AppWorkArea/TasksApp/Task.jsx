import React from 'react'
import trash from '../../../assets/ui/8.Trash.svg'
import { useDispatch } from 'react-redux'
import { removeTask } from '../../Store/StoreSlieces/TasksSlice'
import { useSelector } from 'react-redux'

export default function Task({task}) {
  const activeProject = useSelector(state => state.ProjectSlice.activeProjectId.payload)
  const dispatch = useDispatch()
      
  return (
    <div className="taskWrapper">
      <input type="checkbox" className="taskCheckbox" />
      <span className="taskTitle"> {task.title} </span>
      <img
        src={trash}
        alt="f"
        className="taskTrash"
        onClick={() => dispatch(removeTask({taskId: task.id, activeProject: activeProject}))}
      />
    </div>
  );
}
