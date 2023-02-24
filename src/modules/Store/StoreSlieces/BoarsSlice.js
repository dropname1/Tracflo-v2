import { createSlice, current } from "@reduxjs/toolkit";

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
  name: "BoardSlice",
  initialState,
  reducers: {
    createBoardApp(state, projectAndAppsId) {
      state.boardApps.push({
        appId: projectAndAppsId.payload,
        boards: [
          {
            id: Date.now() + 1000,
            name: "Tasks",
            hasAddTask: true,
            tasks: [],
          },
          {
            id: Date.now() + 2000,
            name: "In Work",
            tasks: [],
          },
          {
            id: Date.now() + 3000,
            name: "Done",
            tasks: [],
          },
        ],
      });
    },
    addTaskInBoard (state, taskObject) {

      let title = taskObject.payload.title
      let activeApp = taskObject.payload.activeApp
      
      state.boardApps = state.boardApps.map( boardApp => {
        if(boardApp.appId === activeApp) {
          boardApp.boards[0].tasks.push({
            id: Date.now(),
            title: title,
            boardId: boardApp.boards[0].id,
          });
        } return boardApp
      })
    },

    editTaskInBoard (state, taskObject) {
      let title = taskObject.payload.title;
      let taskId = taskObject.payload.taskId;
      let boardId = taskObject.payload.boardId;
      let activeProject = taskObject.payload.activeProject;

      state.boardApps = state.boardApps.map((boardApp,index) => {
        if(boardApp.appId === activeProject) {
          boardApp.boards.map( board => {
            if(board.id === boardId) {
              board.tasks.map(task => {
                if(task.id === taskId) {
                  task.title = title
                }
                return task
              }) 
            }
            return board
          })
        }
        return boardApp
      });
    }
    
  },
});

export const { createBoardApp, addTaskInBoard, editTaskInBoard } = BoardSlice.actions;

export default BoardSlice.reducer

