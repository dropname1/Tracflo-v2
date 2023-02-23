import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trashApps: [
    {
      id: 1,
      objectType: "Task",
      object: { id: 1, title: "Leran Nuxt.js", completed: false },
    },
    {
      id: 1,
      objectType: "PomoadoroItem",
      object: { id: 3, time: "4:34", type: "Relaxation" },
    },
    {
      id: 1,
      objectType: "Note",
      object: {id: 1, title: 'This is Note', expanded: false, overflow: false},
    },
  ],
};

export const TrashSlice = createSlice({
  name: "TrashSlice",
  initialState,
  reducers: {
    addTrashApp(state) {

    }
  },
});

export const {} = TrashSlice.actions;

export default TrashSlice.reducer;
