import { createSlice } from "@reduxjs/toolkit";

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
          console.log(taskApp);

        if(taskApp.appId === activeProject) {
          return taskApp.tasks.push({
            id: Date.now(),
            title: task,
            completed: false,
          })
        } else return taskApp
      })
    }
  },
});

export const { addTask } = TasksSlice.actions;

export default TasksSlice.reducer;
