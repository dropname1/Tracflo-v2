import React, {useState} from 'react'
import QuickFind from '../modules/SideBar/QuickFind'
import Project from '../modules/SideBar/Project';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {createNewProject} from '../modules/Store/StoreSlieces/ProjectSlice'
import { createTaskApp } from '../modules/Store/StoreSlieces/TasksSlice';
import { createBoardApp } from '../modules/Store/StoreSlieces/BoarsSlice';
import { createNoteApp } from '../modules/Store/StoreSlieces/NotesSlice';
import { createSliceApp } from '../modules/Store/StoreSlieces/SlicesSliece';
import { createPomodoroApp } from '../modules/Store/StoreSlieces/PomadoroSlice';

export default function SideBar() {

  const projects = useSelector(state => state.ProjectSlice.projects)
  const dispatch = useDispatch()

  function createProjectAndApps () {
    let projectAndAppsId = Date.now()
    dispatch(createNewProject(projectAndAppsId))
    dispatch(createTaskApp(projectAndAppsId));
    dispatch(createBoardApp(projectAndAppsId));
    dispatch(createNoteApp(projectAndAppsId));
    dispatch(createSliceApp(projectAndAppsId));
    dispatch(createPomodoroApp(projectAndAppsId));
    // todo create trash app 
    
  }


  return (
    <div className="sidebarWrapper">
      {/* <QuickFind /> */}
      <div className="workspaceWrapper">
        <div className="addNewWorkspace" onClick={() => createProjectAndApps()}>
          +
        </div>
        <span className="workspace">Workspace</span>
      </div>
      <div className="projectsWrapper">
        {projects.map((p) => (
          <Project project={p} key={p.id}/>
        ))}
      </div>
    </div>
  );
}
