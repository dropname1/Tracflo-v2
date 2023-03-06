import React from 'react'
import ClearInput from '../../modules/Ceneral/clearInput'
import AddTask from '../../modules/AppWorkArea/TasksApp/AddTask'
import Task from '../../modules/AppWorkArea/TasksApp/Task'
import { useSelector } from 'react-redux'


export default function TasksApp({ isActiveApp }) {
  const taskApps = useSelector((state) => state.TasksSlice.taskApps);
  const activeProject = useSelector(
    (state) => state.ProjectSlice.activeProjectId.payload
  );

  const taskApp = (taskApp) => {
    if (taskApp.appId === activeProject) {
      return task(taskApp);
    }
  };

  const task = (taskApp) => {
    return taskApp.tasks.map((task) => <Task task={task} key={task.id} />);
  };

  return (
    <div
      className="TasksApp"
      style={{
        height: isActiveApp === "Tasks" ? "initial" : "0",
        overflow: isActiveApp === "Tasks" ? "initial" : "hidden",
      }}
    >
      <ClearInput />
      <div className="addTaskAndTasksWrapper">
        <AddTask activeProject={activeProject} />
        <div className="TasksWrapper">{taskApps && taskApps.map(taskApp)}</div>
      </div>
    </div>
  );
}
