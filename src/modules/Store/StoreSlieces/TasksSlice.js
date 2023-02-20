import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  taskApps: [
    {
      appId: 1,
      tasks: [
        { id: 1, title: "Leran Nuxt.js", completed: false, },
        { id: 2, title: "Leran Next.js", completed: false, },
        { id: 3, title: "Leran Nest.js", completed: false, },
      ],
    },
    {
      appId: 2,
      tasks: [
        { id: 1, title: "Leran Nuxt.js 2222", completed: false, },
        { id: 2, title: "Leran Next.js 2222", completed: false, },
        { id: 3, title: "Leran Nest.js 2222", completed: false, },
      ],
    },
    {
      appId: 3,
      tasks: [
        { id: 1, title: "Leran Nuxt.js project 3", completed: false, },
        { id: 2, title: "Leran Next.js", completed: false, },
        { id: 3, title: "Leran Nest.js", completed: false, },
      ],
    },
  ],
};

export const TasksSlice = createSlice({
  name: "TasksSlice",
  initialState,
  reducers: {
    addTask (state, taskObject) {
      let task = taskObject.payload.task
      let activeProject = taskObject.payload.activeProject

      state.taskApps = state.taskApps.map( taskApp => {
        if(taskApp.appId === activeProject) {
          taskApp.tasks.push({
            id: Date.now(),
            title: task,
            completed: false,
          })
        } 
        return taskApp
      })
    },
    removeTask(state, taskObject) {
      let taskId = taskObject.payload.taskId
      let activeProject = taskObject.payload.activeProject

       state.taskApps = state.taskApps.map((taskApp) => {
         if (taskApp.appId === activeProject) {
            taskApp.tasks = taskApp.tasks.filter((task) => task.id !== taskId)
         } 
         return taskApp;
       })
    }
  },
});

export const { addTask, removeTask } = TasksSlice.actions;

export default TasksSlice.reducer;
