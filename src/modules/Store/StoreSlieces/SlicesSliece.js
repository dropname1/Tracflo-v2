import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  goalApps: [
    {
      appId: 1,
      goals: [
        {
          id: 1,
          title: "Leran Vuex State manager 1",
          progress: 23,
          contextMenu: false,
          slices: [
            { id: 1, title: "Leran Step 1", completed: true },
            { id: 2, title: "Leran Step 2", completed: false },
            { id: 3, title: "Leran Step 3", completed: false },
          ],
        },
        {
          id: 2,
          title: "Leran Vuex State manager 2",
          progress: 43,
          contextMenu: false,
          slices: [
            { id: 11, title: "Leran Step 1", completed: true },
            { id: 12, title: "Leran Step 2", completed: true },
            { id: 13, title: "Leran Step 3", completed: true },
          ],
        },
        {
          id: 3,
          title: "Leran Vuex State manager 3",
          progress: 63,
          contextMenu: false,
          slices: [
            { id: 111, title: "Leran Step 1", completed: false },
            { id: 112, title: "Leran Step 2", completed: false },
            { id: 113, title: "Leran Step 3", completed: false },
          ],
        },
      ],
    },
    {
      appId: 2,
      goals: [
        {
          id: 11123,
          title: "Leran Vuex State manager 2222222",
          progress: 23,
          contextMenu: false,
          slices: [
            { id: 1, title: "Leran Step 1 project 2", completed: false },
            { id: 2, title: "Leran Step 2", completed: false },
            { id: 3, title: "Leran Step 3", completed: false },
          ],
        },
        {
          id: 2,
          title: "Leran Vuex State manager",
          progress: 23,
          contextMenu: false,
          slices: [
            { id: 11, title: "Leran Step 1", completed: false },
            { id: 12, title: "Leran Step 2", completed: false },
            { id: 13, title: "Leran Step 3", completed: false },
          ],
        },
        {
          id: 3525,
          title: "Leran Vuex State manager",
          progress: 23,
          contextMenu: false,
          slices: [
            { id: 111, title: "Leran Step 1", completed: false },
            { id: 112, title: "Leran Step 2", completed: false },
            { id: 113, title: "Leran Step 3", completed: false },
          ],
        },
      ],
    },
    {
      appId: 3,
      goals: [
        {
          id: 12525,
          title: "Leran Vuex State manager 3333333333",
          progress: 23,
          contextMenu: false,
          slices: [
            { id: 1, title: "Leran Step 1 project 3", completed: false },
            { id: 2, title: "Leran Step 2", completed: false },
            { id: 3, title: "Leran Step 3", completed: false },
          ],
        },
        {
          id: 225,
          title: "Leran Vuex State manager",
          progress: 23,
          contextMenu: false,
          slices: [
            { id: 1, title: "Leran Step 1", completed: false },
            { id: 2, title: "Leran Step 2", completed: false },
            { id: 3, title: "Leran Step 3", completed: false },
          ],
        },
        {
          id: 314,
          title: "Leran Vuex State manager",
          progress: 23,
          contextMenu: false,
          slices: [
            { id: 1, title: "Leran Step 1", completed: false },
            { id: 2, title: "Leran Step 2", completed: false },
            { id: 3, title: "Leran Step 3", completed: false },
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
