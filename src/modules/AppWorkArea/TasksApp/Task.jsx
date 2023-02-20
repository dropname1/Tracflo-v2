import React from 'react'
import trash from '../../../assets/ui/8.Trash.svg'
import { useDispatch } from 'react-redux'
import { removeTask, completedTask } from '../../Store/StoreSlieces/TasksSlice'
import { useSelector } from 'react-redux'
import EditWithClick from '../TasksApp/EditOptionItem/EditOption'

export default function Task({task}) {
  const activeProject = useSelector(state => state.ProjectSlice.activeProjectId.payload)
  const dispatch = useDispatch()
      
  return (
    <div className="taskWrapper">
      <input
        type="checkbox"
        checked={task.completed}
        className="taskCheckbox"
        onChange={() =>
          dispatch(
            completedTask({ taskId: task.id, activeProject: activeProject })
          )
        }
      />
      <span
        className="taskTitle"
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        <EditWithClick task={task}/>
      </span>
      <img
        src={trash}
        className="taskTrash"
        onClick={() =>
          dispatch(
            removeTask({ taskId: task.id, activeProject: activeProject })
          )
        }
      />
    </div>
  );
}
