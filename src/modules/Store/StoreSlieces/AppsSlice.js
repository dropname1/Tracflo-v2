import { createSlice } from "@reduxjs/toolkit";
import Notes from '../../../assets/ui/2.notes.svg'
import Tasks from '../../../assets/ui//3.Tasks.svg'
import Board from '../../../assets/ui/4.Borads.svg'
import Slices from '../../../assets/ui/6.Slices.svg'
import Pomodoro from '../../../assets/ui/7.Pomodoro.svg'
import Trash from '../../../assets/ui/8.Trash.svg'

const initialState = {
    apps: [
        {id: 1, title: 'Notes', selected: false, createdItems: 0, svgImage: Notes},
        {id: 2, title: 'Tasks', selected: false, createdItems: 0, svgImage: Tasks},
        {id: 3, title: 'Board', selected: false, createdItems: 0, svgImage: Board},
        {id: 4, title: 'Slices', selected: false, createdItems: 0, svgImage: Slices},
        {id: 5, title: 'Pomodoro', selected: false, createdItems: 0, svgImage: Pomodoro},
        {id: 6, title: 'Trash', selected: false, createdItems: 0, svgImage: Trash},
    ],
    activeApp: {payload: 'Notes'}
}

export const AppsSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setActiveApp (state, activeAppName) {
      // state.activeApp.payload = activeAppName.payload
      // console.log(state.activeApp);

    }
  },
});

export const { setActiveApp } = AppsSlice.actions;

export default AppsSlice.reducer;