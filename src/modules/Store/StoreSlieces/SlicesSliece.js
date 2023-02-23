import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goalApps: [

    {
      appId: 1, 
      goals: [
        {id: 1, title: 'Leran Vuex State manager', progress: 23, contextMenu: false, slices: [
          { id: 1, title: "Leran Step 1", completed: false },
          { id: 2, title: "Leran Step 2", completed: false },
          { id: 3, title: "Leran Step 3", completed: false },
        ]},
        {id: 2, title: 'Leran Vuex State manager', progress: 43, contextMenu: false, slices: [
          { id: 1, title: "Leran Step 1", completed: false },
          { id: 2, title: "Leran Step 2", completed: false },
          { id: 3, title: "Leran Step 3", completed: false },
        ]},
        {id: 3, title: 'Leran Vuex State manager', progress: 63, contextMenu: false, slices: [
          { id: 1, title: "Leran Step 1", completed: false },
          { id: 2, title: "Leran Step 2", completed: false },
          { id: 3, title: "Leran Step 3", completed: false },
        ]},
      ]
    },
    {
      appId: 2, 
      goals: [
        {id: 1, title: 'Leran Vuex State manager 2222222', progress: 23, contextMenu: false, slices: [
          { id: 1, title: "Leran Step 1 project 2", completed: false },
          { id: 2, title: "Leran Step 2", completed: false },
          { id: 3, title: "Leran Step 3", completed: false },
        ]},
        {id: 2, title: 'Leran Vuex State manager', progress: 23, contextMenu: false, slices: [
          { id: 1, title: "Leran Step 1", completed: false },
          { id: 2, title: "Leran Step 2", completed: false },
          { id: 3, title: "Leran Step 3", completed: false },
        ]},
        {id: 3, title: 'Leran Vuex State manager', progress: 23, contextMenu: false, slices: [
          { id: 1, title: "Leran Step 1", completed: false },
          { id: 2, title: "Leran Step 2", completed: false },
          { id: 3, title: "Leran Step 3", completed: false },
        ]},
      ]
    },
    {
      appId: 3, 
      goals: [
        {id: 1, title: 'Leran Vuex State manager 3333333333', progress: 23, contextMenu: false, slices: [
          { id: 1, title: "Leran Step 1 project 3", completed: false },
          { id: 2, title: "Leran Step 2", completed: false },
          { id: 3, title: "Leran Step 3", completed: false },
        ]},
        {id: 2, title: 'Leran Vuex State manager', progress: 23, contextMenu: false, slices: [
          { id: 1, title: "Leran Step 1", completed: false },
          { id: 2, title: "Leran Step 2", completed: false },
          { id: 3, title: "Leran Step 3", completed: false },
        ]},
        {id: 3, title: 'Leran Vuex State manager', progress: 23, contextMenu: false, slices: [
          { id: 1, title: "Leran Step 1", completed: false },
          { id: 2, title: "Leran Step 2", completed: false },
          { id: 3, title: "Leran Step 3", completed: false },
        ]},
      ]
    },
  ],
};

export const SlicesSlice = createSlice({
  name: "SlicesSlice",
  initialState,
  reducers: {
    createSliceApp (state, projectAndAppsId) {
      state.goalApps.push({
        appId: projectAndAppsId.payload,
        goals: []
      })
    }
  }
});

export const { createSliceApp } = SlicesSlice.actions;

export default SlicesSlice.reducer