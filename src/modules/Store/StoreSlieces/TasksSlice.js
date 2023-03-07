import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  taskApps: [
    {
      appId: 1,
      tasks: [
        {
          id: 1,
          title: "Come up with a video idea",
          completed: true,
        },
        { id: 2, title: "Create video thumbnail", completed: false },
        { id: 3, title: "Come up with a catchy headline", completed: false },
        { id: 4, title: "Shoot video", completed: false },
      ],
    },
    {
      appId: 2,
      tasks: [
        { id: 1, title: "Make a learning plan", completed: true },
        { id: 2, title: "Explore Variables and Data Types", completed: false },
        {
          id: 3,
          title: "Learn functions, learn how to pass parameters",
          completed: false,
        },
      ],
    },
  ],
};

export const TasksSlice = createSlice({
  name: "TasksSlice",
  initialState,
  reducers: {
    createTaskApp(state, projectAndAppId) {
      state.taskApps.push({
        appId: projectAndAppId.payload,
        tasks: [],
      });
    },
    addTask(state, taskObject) {
      let task = taskObject.payload.task;
      let activeProject = taskObject.payload.activeProject;

      state.taskApps = state.taskApps.map((taskApp) => {
        if (taskApp.appId === activeProject) {
          taskApp.tasks.unshift({
            id: Date.now(),
            title: task,
            completed: false,
          });
        }
        return taskApp;
      });
    },
    removeTask(state, taskObject) {
      let taskId = taskObject.payload.taskId;
      let activeProject = taskObject.payload.activeProject;

      state.taskApps = state.taskApps.map((taskApp) => {
        if (taskApp.appId === activeProject) {
          taskApp.tasks = taskApp.tasks.filter((task) => task.id !== taskId);
        }
        return taskApp;
      });
    },
    completedTask(state, taskObject) {
      let taskId = taskObject.payload.taskId;
      let activeProject = taskObject.payload.activeProject;

      state.taskApps = state.taskApps.map((taskApp) => {
        if (taskApp.appId === activeProject) {
          taskApp.tasks.map((task) => {
            if (task.id === taskId) {
              task.completed = !task.completed;
            }
          });
        }
        return taskApp;
      });
    },
    editTaskInApp(state, taskObject) {
      let title = taskObject.payload.title;
      let taskId = taskObject.payload.taskId;
      let activeProject = taskObject.payload.activeProject;

      state.taskApps = state.taskApps.map((taskApp) => {
        if (taskApp.appId === activeProject) {
          taskApp.tasks.map((task) => {
            if (task.id === taskId) {
              task.title = title;
            }
          });
        }
        return taskApp;
      });
    },
  },
});

export const {
  addTask,
  removeTask,
  completedTask,
  editTaskInApp,
  createTaskApp,
} = TasksSlice.actions;

export default TasksSlice.reducer;
