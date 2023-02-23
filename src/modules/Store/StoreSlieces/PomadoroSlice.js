import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoroApps: [
    { 
    appId: 1,
    pomodoroItems: [
      { id: 1, time: "12:34", type: "Pomadoro", objectType: "PomoadoroItem" },
      { id: 2, time: "01:34", type: "Pomadoro", objectType: "PomoadoroItem" },
      { id: 3, time: "13:34", type: "Pomadoro", objectType: "PomoadoroItem" },
      { id: 4, time: "3:34", type: "Pomadoro", objectType: "PomoadoroItem" },
      { id: 5, time: "5:00", type: "Relaxation", objectType: "PomoadoroItem" },
      { id: 6, time: "3:34", type: "Relaxation", objectType: "PomoadoroItem" },
      { id: 7, time: "4:44", type: "Relaxation", objectType: "PomoadoroItem" },
      { id: 8, time: "4:14", type: "Relaxation", objectType: "PomoadoroItem" },
    ],
    },
    { 
    appId: 2,
    pomodoroItems: [
      { id: 1, time: "12:34", type: "Pomadoro", objectType: "PomoadoroItem" },
      { id: 8, time: "4:14", type: "Relaxation", objectType: "PomoadoroItem" },
    ],
    }

  ]
 
  
};

export const PomodoroSlice = createSlice({
  name: "PomodoroSlice",
  initialState,
  reducers: {
    createPomodoroApp(state, projectAndAppsId) {
      state.pomodoroApps.push({
        appId: projectAndAppsId.payload,
        pomodoroItems: [],
      });
    },
  },
});

export const { createPomodoroApp } = PomodoroSlice.actions;

export default PomodoroSlice.reducer