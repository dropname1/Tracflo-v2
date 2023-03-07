import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trash: [
  ],
};

export const TrashSlice = createSlice({
  name: "TrashSlice",
  initialState,
  reducers: {
    addProjectTrash (state, trashObject) {
      let id = trashObject.payload.id
      let title = trashObject.payload.title
      state.trash.unshift({
        id: id,
        title: title,
      })
    },
    removeAll (state) {
      state.trash = []
    },
    recoverAll(state) {
      state.trash = []
    },
    removeProject(state, id) {
      state.trash = state.trash.filter( p => p.id !== id.payload)
    },
    recoverProject(state, id) {
      state.trash = state.trash.filter((p) => p.id !== id.payload);
    }
  },
});

export const {
  addProjectTrash,
  removeAll,
  recoverAll,
  removeProject,
  recoverProject,
} = TrashSlice.actions;

export default TrashSlice.reducer;
