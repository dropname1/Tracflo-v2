import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  notesApps: [
    {
      appId: 1,
      notes: [
        {
          id: 1,
          title:
            "Preparing the idea and concept: defining the theme and main idea of the video, as well as developing the plan and script. Preparation of shooting equipment: choosing a camera, microphone, lighting, tripod and other necessary equipment for shooting. Preparing the location and scenery: choosing a location for shooting, setting up scenery and background elements. Filming: Record video according to plan and scenario.",
          expanded: false,
          overflow: false,
          objectType: "Note",
        },

        {
          id: 2,
          title:
            "Editing: selecting and editing the best moments from recorded materials, cutting and combining individual frames, adding sound. Creating a cover and video description: designing a unique title, creating a beautiful cover, writing a video description, and choosing search tags. Publishing and Promotion: Uploading videos to YouTube, promoting through social media and other marketing channels, interacting with viewers and responding to comments.",
          expanded: false,
          overflow: false,
          objectType: "Note",
        },
      ],
    },

    {
      appId: 2,
      notes: [
        {
          id: 1,
          title:
            "How to learn the JavaScript language from scratch: Start with the basics: Learn the fundamentals of JavaScript, such as variables, data types, operators, conditionals, and loops. This will help you understand the basic syntax of the language. Learn JavaScript in the context of HTML and CSS: Learning JavaScript directly in the context of HTML and CSS will help you better understand how web pages interact with the user. It is recommended to learn HTML and CSS along with JavaScript. Learn Libraries and Frameworks: Learning JavaScript libraries and frameworks like React, Angular, and Vue will help you build more complex apps and websites. Create your own projects: Creating your own projects will help you consolidate knowledge and practical skills. You can start with small projects, like a calculator or tic-tac-toe, and work your way up to more complex projects.",
          expanded: false,
          overflow: false,
          objectType: "Note",
        },

        {
          id: 2,
          title:
            "How to Learn JavaScript from Scratch (Part 2): Take Online Courses: There are many online courses to help you learn JavaScript. Some of them are free and others are paid. Some good online courses are Codecademy, FreeCodeCamp, Udemy, Coursera. Join the community: Joining the JavaScript developer community will help you learn about the latest trends and new developments in the field. You can join groups on Facebook, LinkedIn or Reddit. Practice regularly: Practice is the key to success in learning any programming language. Try to write code every day, create new projects, participate in online courses and meetups. The more you practice, the better you become.",
          expanded: false,
          overflow: false,
          objectType: "Note",
        },

        {
          id: 3,
          title:
            "The Feynman Technique is a learning method that allows you to quickly assimilate new information and better remember it. It consists of the following steps: 1. Select the topic you want to study and write it down on paper. 2. Explain this topic using simple words so that even a child can understand. 3. Use the \" flip through the pages \" technique - review the material you want to study and take notes. 4. Try to explain the topic again using your notes and simple words. 5. Test your knowledge by completing tasks or tests related to this topic.",
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
      state.activeNoteApp.unshift({
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
