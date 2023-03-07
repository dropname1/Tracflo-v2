import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goalApps: [
    {
      appId: 1,
      goals: [
        {
          id: 1,
          title: "Make 10 videos in 1 month",
          progress: 23,
          contextMenu: false,
          slices: [
            { id: 1, title: "Shoot the first video", completed: true },
            { id: 2, title: "Shoot a second video", completed: true },
            { id: 3, title: "Shoot a third video", completed: false },
            { id: 4, title: "Shoot fourth video", completed: false },
            { id: 5, title: "Shoot the fifth video", completed: false },
            { id: 6, title: "Shoot the sixth video", completed: false },
            { id: 7, title: "Shoot the seventh video", completed: false },
            { id: 8, title: "Shoot the eighth video", completed: false },
            { id: 9, title: "Shoot the ninth video", completed: false },
            { id: 10, title: "Shoot the tenth video", completed: false },
          ],
        },
      ],
    },
    {
      appId: 2,
      goals: [
        {
          id: 11123,
          title: "Learn JavaScript in 3 Months",
          progress: 23,
          contextMenu: false,
          slices: [
            {
              id: 1,
              title: "Learn the basics of the language",
              completed: true,
            },
            { id: 2, title: "Solve 10 problems", completed: false },
            { id: 3, title: "Make a simple web application", completed: false },
            { id: 4, title: "Learn advanced js topics", completed: false },
            { id: 5, title: "take a knowledge test", completed: false },
          ],
        },
      ],
    },
  ],
};

export const SlicesSlice = createSlice({
  name: "SlicesSlice",
  initialState,
  reducers: {
    createSliceApp(state, projectAndAppsId) {
      state.goalApps.push({
        appId: projectAndAppsId.payload,
        goals: [],
      });
    },
    addGoal(state, goalObject) {
      const goalActiveApp = goalObject.payload.activeApp;
      const title = goalObject.payload.title;
      state.goalApps = state.goalApps.map((goalApp) => {
        if (goalApp.appId === goalActiveApp) {
          goalApp.goals.unshift({
            id: Date.now(),
            title: title,
            progress: 0,
            slices: [],
          });
        }
        return goalApp;
      });
    },
    removeGoal(state, goalObject) {
      let goalActiveApp = goalObject.payload.activeApp;
      let id = goalObject.payload.id;
      state.goalApps = state.goalApps.map((goalApp) => {
        if (goalApp.appId === goalActiveApp) {
          goalApp.goals = goalApp.goals.filter((goal) => goal.id !== id);
        }
        return goalApp;
      });
    },
    editGoal(state, goalObject) {
      let goalActiveApp = goalObject.payload.activeApp;
      let id = goalObject.payload.id;
      let title = goalObject.payload.title;

      state.goalApps = state.goalApps.map((goalApp) => {
        if (goalApp.appId === goalActiveApp) {
          goalApp.goals = goalApp.goals.map((goal) => {
            if (goal.id === id) {
              goal.title = title;
            }
            return goal;
          });
        }
        return goalApp;
      });
    },
    addSlice(state, sliceObject) {
      let title = sliceObject.payload.title;
      let activeApp = sliceObject.payload.activeApp;
      let goalId = sliceObject.payload.goalId;

      state.goalApps = state.goalApps.map((goalApp) => {
        if (goalApp.appId === activeApp) {
          goalApp.goals.map((goal) => {
            if (goal.id === goalId) {
              goal.slices.unshift({
                id: Date.now(),
                title: title,
                completed: false,
              });
            }
            return goal;
          });
        }
        return goalApp;
      });
    },
    removeSlice(state, sliceObject) {
      let id = sliceObject.payload.id;
      let activeApp = sliceObject.payload.activeApp;
      let goalId = sliceObject.payload.goalId;

      state.goalApps = state.goalApps.map((goalApp) => {
        if (goalApp.appId === activeApp) {
          goalApp.goals.map((goal) => {
            if (goal.id === goalId) {
              goal.slices = goal.slices.filter((slice) => slice.id !== id);
            }
            return goal;
          });
        }
        return goalApp;
      });
    },
    completedSlice(state, sliceObject) {
      let id = sliceObject.payload.id;
      let activeApp = sliceObject.payload.activeApp;
      let goalId = sliceObject.payload.goalId;

      state.goalApps = state.goalApps.map((goalApp) => {
        if (goalApp.appId === activeApp) {
          goalApp.goals.map((goal) => {
            if (goal.id === goalId) {
              goal.slices = goal.slices.map((slice) => {
                if (slice.id === id) {
                  slice.completed = !slice.completed;
                }
                return slice;
              });
            }
            return goal;
          });
        }
        return goalApp;
      });
    },
    editSlice(state, sliceObject) {
      let id = sliceObject.payload.id;
      let title = sliceObject.payload.title;
      let activeApp = sliceObject.payload.activeApp;
      let goalId = sliceObject.payload.goalId;


      state.goalApps = state.goalApps.map((goalApp) => {
        if (goalApp.appId === activeApp) {
          goalApp.goals.map((goal) => {
            if (goal.id === goalId) {
              goal.slices = goal.slices.map((slice) => {
                if (slice.id === id) {
                  slice.title = title
                }
                return slice;
              });
            }
            return goal;
          });
        }
        return goalApp;
      });
    },
  },
});

export const {
  createSliceApp,
  addGoal,
  removeGoal,
  addSlice,
  removeSlice,
  completedSlice,
  editGoal,
  editSlice,
} = SlicesSlice.actions;

export default SlicesSlice.reducer;
