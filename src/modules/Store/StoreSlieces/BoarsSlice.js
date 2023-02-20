import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardApps: [
    {
      appId: 1,
      boards: [
        {
          id: 1,
          name: "Tasks",
          hasAddTask: true,
          tasks: [
            { id: 1, title: "Leran Nux.js 11111", boardId: 1 },
            { id: 2, title: "Leran Nux.js 11111", boardId: 1 },
            { id: 3, title: "Leran Nux.js 11111", boardId: 1 },
          ],
        },
        {
          id: 2,
          name: "In Work",
          tasks: [
            { id: 1, title: "Leran Nux.js Board 2", boardId: 2 },
            { id: 2, title: "Leran Nux.js 11111", boardId: 2 },
            { id: 3, title: "Leran Nux.js 11111", boardId: 2 },
          ],
        },
        {
          id: 3,
          name: "Done",
          tasks: [
            { id: 1, title: "Leran Nux.js Board 3", boardId: 3 },
            { id: 2, title: "Leran Nux.js 11111", boardId: 3 },
            { id: 3, title: "Leran Nux.js 11111", boardId: 3 },
          ],
        },
      ],
    },
    // obj 2
    {
      appId: 2,
      boards: [
        {
          id: 1,
          name: "Tasks",
          hasAddTask: true,
          tasks: [
            { id: 1, title: "Leran Nux.js PROJECT 2", boardId: 1 },
            { id: 2, title: "Leran Nux.js PROJECT 2", boardId: 1 },
            { id: 3, title: "Leran Nux.js PROJECT 2", boardId: 1 },
          ],
        },
        {
          id: 2,
          name: "In Work",
          tasks: [
            { id: 1, title: "Leran Nux.js Board 2", boardId: 2 },
            { id: 2, title: "Leran Nux.js 11111", boardId: 2 },
            { id: 3, title: "Leran Nux.js 11111", boardId: 2 },
          ],
        },
        {
          id: 3,
          name: "Done",
          tasks: [
            { id: 1, title: "Leran Nux.js Board 3", boardId: 3 },
            { id: 2, title: "Leran Nux.js 11111", boardId: 3 },
            { id: 3, title: "Leran Nux.js 11111", boardId: 3 },
          ],
        },
      ],
    },
  ],
};

export const BoardSlice = createSlice({
    name: 'BoardSlice',
    initialState,
    reducers: {

    }
})

export const {} = BoardSlice.actions

export default BoardSlice.reducer

