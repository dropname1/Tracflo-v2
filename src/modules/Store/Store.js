import {configureStore, combineReducers} from '@reduxjs/toolkit'
import ProjectSlice from './StoreSlieces/ProjectSlice' 
import AppsSlice from './StoreSlieces/AppsSlice'
import BoardSlice from './StoreSlieces/BoarsSlice'
import SlicesSliece from './StoreSlieces/SlicesSliece'
import NotesSlice from './StoreSlieces/NotesSlice'
import PomodoroSlice from './StoreSlieces/PomadoroSlice'
import TasksSlice from './StoreSlieces/TasksSlice'
import TrashSlice from './StoreSlieces/TrashSlice'
import AllContextSlice from './StoreSlieces/AllContextSlice'

import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  AllContextSlice: AllContextSlice,
  ProjectSlice: ProjectSlice,
  AppsSlice: AppsSlice,
  BoardSlice: BoardSlice,
  SlicesSliece: SlicesSliece,
  NotesSlice: NotesSlice,
  PomodoroSlice: PomodoroSlice,
  TasksSlice: TasksSlice,
  TrashSlice: TrashSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)

export default store
