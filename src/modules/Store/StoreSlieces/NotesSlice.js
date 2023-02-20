import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notesApps: [
  
    {appId: 1,
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
     }

    ]},

    {appId: 2,
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
     }

    ]},
  ],
};

export const NotesSlice = createSlice({
  name: "NotesSlice",
  initialState,
  reducers: {
    removeNote (state, props) {
      let activeApp = props.payload.activeApp
      let noteId = props.payload.noteId
      

    },
    addNote(state,noteObject) {
        let note = noteObject.payload.note
        let activeProject = noteObject.payload.activeProject
      
    }
  },
});

export const { removeNote, addNote } = NotesSlice.actions;

export default NotesSlice.reducer