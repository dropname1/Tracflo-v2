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
            { id: 1, title: "SEO optimization", boardId: 1, order: 1 },
            { id: 2, title: "Explore Youtube", boardId: 1, order: 2 },
          ],
        },
        {
          id: 2,
          name: "In Work",
          tasks: [
            { id: 4, title: "Edit video", boardId: 2, order: 1 },
            { id: 5, title: "write a script", boardId: 2, order: 2 },
            { id: 6, title: "use chatGPT for ideas", boardId: 2, order: 3 },
          ],
        },
        {
          id: 3,
          name: "Done",
          tasks: [
            { id: 1, title: "Choose the best idea", boardId: 1, order: 3 },
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
            { id: 1, title: "Leran 'let' const", boardId: 1, order: 1 },
            { id: 2, title: "Leran 'hosting' in js", boardId: 1, order: 2 },
            { id: 3, title: "Leran Scope", boardId: 1, order: 3 },
          ],
        },
        {
          id: 2,
          name: "In Work",
          tasks: [
            { id: 4, title: "Leran DnD api", boardId: 2, order: 1 },
            { id: 5, title: "Leran LocalStorage in js", boardId: 2, order: 2 },
          ],
        },
        {
          id: 3,
          name: "Done",
          tasks: [
            { id: 7, title: "Explore React", boardId: 3, order: 1 },
          ],
        },
      ],
    },
  ],
  dragStartTask: null,
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
    addTaskInBoard(state, taskObject) {
      let title = taskObject.payload.title;
      let activeApp = taskObject.payload.activeApp;

      state.boardApps = state.boardApps.map((boardApp) => {
        if (boardApp.appId === activeApp) {
          boardApp.boards[0].tasks.unshift({
            id: Date.now(),
            title: title,
            boardId: boardApp.boards[0].id,
            order: Date.now()
          });
        }
        return boardApp;
      });
    },

    editTaskInBoard(state, taskObject) {
      let title = taskObject.payload.title;
      let taskId = taskObject.payload.taskId;
      let boardId = taskObject.payload.boardId;
      let activeProject = taskObject.payload.activeProject;

      state.boardApps = state.boardApps.map((boardApp, index) => {
        if (boardApp.appId === activeProject) {
          boardApp.boards.map((board) => {
            if (board.id === boardId) {
              board.tasks.map((task) => {
                if (task.id === taskId) {
                  task.title = title;
                }
                return task;
              });
            }
            return board;
          });
        }
        return boardApp;
      });
    },
    removeTaskInBoard(state, taskObject) {
      let id = taskObject.payload.id;
      let boardId = taskObject.payload.boardId;
      let activeApp = taskObject.payload.activeApp;

      state.boardApps = state.boardApps.map((boardApp) => {
        if (boardApp.appId === activeApp) {
          boardApp.boards.map((board) => {
            if (board.id === boardId) {
              board.tasks = board.tasks.filter((task) => task.id !== id);
            }
            return board;
          });
        }
        return boardApp;
      });
    },
    drag(state, taskObject) {
      state.dragStartTask = taskObject
    },
    drop(state, boardObject) {

      // убираем задачу из board
      let task = state.dragStartTask.payload.task;
      let taskActiveApp = state.dragStartTask.payload.activeApp;
      let taskBoardId = state.dragStartTask.payload.boardId;

      state.boardApps = state.boardApps.map((boardApp) => {
        if (boardApp.appId === taskActiveApp) {
          boardApp.boards = boardApp.boards.map((board) => {
            if (board.id === taskBoardId) {
              board.tasks = board.tasks.filter( boardTask => boardTask.id !== task.id)
            }
            return board;
          });
        }
        return boardApp;
      });

      // добавляем задачу в другой board
      let board = boardObject.payload.board;
      let boardActiveApp = boardObject.payload.activeApp;

      state.boardApps = state.boardApps.map((boardApp) => {
        if (boardApp.appId === boardActiveApp) {
          boardApp.boards = boardApp.boards.map( appBoard => {
            if (appBoard.id === board.id) {
              appBoard.tasks.unshift({
                id: task.id,
                title: task.title,
                boardId: board.id,
                order: task.order
              });
            }
            return appBoard;
          })
        }
        return boardApp;
      });

    },
    // renameBoardTitle(state, boardObject){
    //   let title = boardObject.payload.title;
    //   let boardId = boardObject.payload.boardId;
    //   let activeApp = boardObject.payload.activeApp;

    //   state.boardApps = state.boardApps.map((boardApp) => {
    //     if (boardApp.appId === activeApp) {
    //       boardApp.boards.map((board) => {
    //         if (board.id === boardId) {
    //           board.title = title
    //         }
    //         return board;
    //       });
    //     }
    //     return boardApp;
    //   });
    // }
  },
});

export const {
  createBoardApp,
  addTaskInBoard,
  editTaskInBoard,
  removeTaskInBoard,
  drag,
  drop,
} = BoardSlice.actions;

export default BoardSlice.reducer

