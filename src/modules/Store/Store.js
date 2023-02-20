import {configureStore} from '@reduxjs/toolkit'
import ProjectSlice from './StoreSlieces/ProjectSlice' 
import AppsSlice from './StoreSlieces/AppsSlice'
import BoardSlice from './StoreSlieces/BoarsSlice'
import SlicesSliece from './StoreSlieces/SlicesSliece'
import NotesSlice from './StoreSlieces/NotesSlice'
import PomodoroSlice from './StoreSlieces/PomadoroSlice'
import TasksSlice from './StoreSlieces/TasksSlice'
import TrashSlice from './StoreSlieces/TrashSlice'
import MainSlice from './StoreSlieces/MainSlice'

export const store = configureStore({
  reducer: {
    ProjectSlice: ProjectSlice,
    AppsSlice: AppsSlice,
    BoardSlice: BoardSlice,
    SlicesSliece: SlicesSliece,
    NotesSlice: NotesSlice,
    PomodoroSlice: PomodoroSlice,
    TasksSlice: TasksSlice,
    TrashSlice: TrashSlice,
    MainSlice: MainSlice,
  },
});
