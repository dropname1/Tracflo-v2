import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoroApps: [
    { 
    appId: 1,
    pomodoroItems: [
      { id: 1, time: "12:34", type: "Pomadoro",  },
      { id: 2, time: "01:34", type: "Pomadoro",  },
      { id: 3, time: "13:34", type: "Pomadoro",  },
      { id: 4, time: "3:34", type: "Pomadoro", },
      { id: 5, time: "5:00", type: "Relaxation",},
      { id: 6, time: "3:34", type: "Relaxation",},
      { id: 7, time: "4:44", type: "Relaxation",},
      { id: 8, time: "4:14", type: "Relaxation",},
    ],
    },
    { 
    appId: 2,
    pomodoroItems: [
      { id: 1, time: "12:34", type: "Pomadoro", },
      { id: 8, time: "4:14", type: "Relaxation",},
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
    addPomodoroItem (state, historyObject) {
      let activeApp = historyObject.payload.activeApp
      let type = historyObject.payload.type
      let time = historyObject.payload.time

      state.pomodoroApps = state.pomodoroApps.map( pomodoroApp => {
        if(pomodoroApp.appId === activeApp) {
          pomodoroApp.pomodoroItems.unshift({
            id: Date.now(),
            type: type,
            time: time
          })
        }
        return pomodoroApp
      }) 
    },
    removePomodoroItem (state, historyObject) {
      let activeApp = historyObject.payload.activeApp
      let id = historyObject.payload.id
      
      state.pomodoroApps = state.pomodoroApps.map( pomodoroApp => {
        if(pomodoroApp.appId === activeApp) {
          pomodoroApp.pomodoroItems = pomodoroApp.pomodoroItems.filter(p => p.id !== id)
        }
        return pomodoroApp
      }) 
    }
  },
});

export const { createPomodoroApp, addPomodoroItem, removePomodoroItem } =
  PomodoroSlice.actions;

export default PomodoroSlice.reducer