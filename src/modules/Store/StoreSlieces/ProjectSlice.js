import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  projects: [
    {
      id: 1,
      title: "Make a Youtube video",
      isSelect: false,
    },
    {
      id: 2,
      title: "Leran JavaScript",
      isSelect: false,
    },
  ],
  activeProjectId: { payload: 1 },
  activeNoteApp: { payload: 1 },
  activeTaskApp: { payload: 1 },
  activeBoardApp: { payload: 1 },
  activeSliceApp: { payload: 1 },
  activePomodoroApp: { payload: 1 },
  activeTrashApp: { payload: 1 },
};

export const ProjectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    removeProject: function (state, id) {
      state.projects = state.projects.filter((project) => project.id !== id.payload);
    },
    selectProject(state, id) {
      state.activeProjectId = id;
      state.activeNoteApp = id;
      state.activeTaskApp = id;
      state.activeBoardApp = id;
      state.activeSliceApp = id;
      state.activePomodoroApp = id;
      state.activeTrashApp = id;
      state.projects = state.projects.map((p) => {
        p.isSelect = false;
        if (p.id === id) {
          p.isSelect = true;
        }
        return p;
      });
    },
    createNewProject(state, projectAndAppsId) {
      state.projects.push({
        id: projectAndAppsId.payload,
        title: "New Project",
        isSelect: false,
      });
    },
    editProject (state, projectObject) {
      let title = projectObject.payload.title
      let project = projectObject.payload.project;

      state.projects = state.projects.map( proj => {
        if(proj.id === project.id) {
          proj.title = title
        }
        return proj
      })
    },
    recoverAll_Trash(state, recoverObject) {
      if(recoverObject) {
        state.projects = [...state.projects, ...recoverObject.payload];
      }
    },
    recoverProject_Trash(state, recoverObject) {
      let id = recoverObject.payload.id
      let title = recoverObject.payload.title
      if(recoverObject) {
        state.projects.push({
          id: id,
          title: title,
          isSelect: false,
        })
      }
    }
  },
});

export const {
  removeProject,
  addProject,
  selectProject,
  createNewProject,
  editProject,
  recoverAll_Trash,
  recoverProject_Trash,
} = ProjectSlice.actions;

export default ProjectSlice.reducer