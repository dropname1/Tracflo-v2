import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  notesApps: [
    {
      appId: 1,
      notes: [
        {
          id: 1,
          title: "This is Note QQQQQQQQQQQQQQQQQQQQQQQQQQQ",
          expanded: false,
          overflow: false,
          objectType: "Note",
        },

        {
          id: 2,
          title:
            "Redux guide for beginers The Usage Guides section provides practical guidance on how to correctly use Redux in real-world applications,",
          expanded: false,
          overflow: false,
          objectType: "Note",
        },

        {
          id: 3,
          title:
            "Redux guide for beginers The Usage Guides section provides practical guidance on how to correctly use Redux in real-world applications, including project setup and architecture, patterns, practices, and techniques. PREREQUISITES The pages in this category assume you understand the core Redux terms and concepts explained in including actions, reducers, stores immutability, React-Redux, and async logic.Setup and Organization​This section covers information on how to set up and organize Redux-based projects.This section provides information about typical Redux patterns and approaches for writing different kinds of Redux logic.",
          expanded: false,
          overflow: true,
          objectType: "Note",
        },
      ],
    },

    {
      appId: 2,
      notes: [
        {
          id: 1,
          title: "This is Note",
          expanded: false,
          overflow: false,
          objectType: "Note",
        },

        {
          id: 2,
          title:
            "Redux guide for beginers The Usage Guides section provides practical guidance on how to correctly use Redux in real-world applications,",
          expanded: false,
          overflow: false,
          objectType: "Note",
        },

        {
          id: 3,
          title:
            "Redux guide for beginers The Usage Guides section provides practical guidance on how to correctly use Redux in real-world applications, including project setup and architecture, patterns, practices, and techniques. PREREQUISITES The pages in this category assume you understand the core Redux terms and concepts explained in including actions, reducers, stores immutability, React-Redux, and async logic.Setup and Organization​This section covers information on how to set up and organize Redux-based projects.This section provides information about typical Redux patterns and approaches for writing different kinds of Redux logic.",
          expanded: false,
          overflow: true,
          objectType: "Note",
        },
      ],
    },
  ],
  activeNoteApp: null,
  activeNoteAppId: null,
};

export const NotesSlice = createSlice({
  name: "NotesSlice",
  initialState,
  reducers: {
    createNoteApp(state, projectAndAppsId) {
      state.notesApps.push({
        appId: projectAndAppsId.payload,
        notes: [],
      });
    },
    setActiveNoteApp(state, activeNoteAppId) {
      for (let i = 0; i < state.notesApps.length; i++) {
        if (state.notesApps[i].appId === activeNoteAppId.payload) {
          state.activeNoteAppId = state.notesApps[i].appId;
          state.activeNoteApp = state.notesApps[i].notes;
        }
      }
    },
    addNote(state, noteObject) {
      state.activeNoteApp.push({
        id: Date.now(),
        title: noteObject.payload.note,
      });

      state.notesApps.map((noteApp) => {
        if (noteApp.appId === state.activeNoteAppId) {
          noteApp.notes = state.activeNoteApp;
        }
        return noteApp;
      });
    },
    removeNote(state, noteId) {
      state.activeNoteApp = state.activeNoteApp.filter(
        (note) => note.id !== noteId.payload
      );

      state.notesApps.map((noteApp) => {
        if (noteApp.appId === state.activeNoteAppId) {
          noteApp.notes = state.activeNoteApp;
        }
        return noteApp;
      });
    },
    editNote(state, noteObject) {
      let title = noteObject.payload.title;
      let noteId = noteObject.payload.noteId;
      let activeProject = noteObject.payload.activeProject;

      state.notesApps = state.notesApps.map((noteApp) => {
        if (noteApp.appId === activeProject) {
          noteApp.notes.map((note) => {
            if (note.id === noteId) {
              note.title = title;
            }
          });
        }
        return noteApp;
      });
    },

    expandNote(state, noteObject) {},
  },
});

export const {
  createNoteApp,
  setActiveNoteApp,
  selectActiveNoteApp,
  removeNote,
  addNote,
  editNote,
  expandNote,
} = NotesSlice.actions;

export default NotesSlice.reducer;
