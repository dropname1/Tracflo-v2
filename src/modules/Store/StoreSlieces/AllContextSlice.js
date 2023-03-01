import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goalBlur: { payload: false },
  themeBlur: { payload: false },
  trashBlur: { payload: false },
};

export const AllContextSlice = createSlice({
  name: "AllContextSlice",
  initialState,
  reducers: {
    blurGoalContextMenu(state, e) {
        state.goalBlur.payload = !state.goalBlur.payload;
    },
    closeGoalContextMenu(state) {
        state.goalBlur.payload = false
    }
  },
});

export const { blurGoalContextMenu, closeGoalContextMenu } = AllContextSlice.actions;

export default AllContextSlice.reducer