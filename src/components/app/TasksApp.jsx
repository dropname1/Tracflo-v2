import React from 'react'
import ClearInput from '../../modules/Ceneral/clearInput'
import AddTask from '../../modules/AppWorkArea/TasksApp/AddTask'
import Task from '../../modules/AppWorkArea/TasksApp/Task'
import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


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
    return taskApp.tasks.map((task) => (
      <CSSTransition key={task.id} classNames="fade" timeout={250}>
        <Task task={task} />
      </CSSTransition>
    ));
  };

  return (
    <TransitionGroup>
      <CSSTransition key={isActiveApp} classNames="fade2" timeout={250}>
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
            <div className="TasksWrapper">
              <TransitionGroup>
                {taskApps && taskApps.map(taskApp)}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
