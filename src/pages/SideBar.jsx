import React, {useState} from 'react'
import QuickFind from '../modules/SideBar/QuickFind'
import Project from '../modules/SideBar/Project';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {createNewProject} from '../modules/Store/StoreSlieces/ProjectSlice'

export default function SideBar() {
 

  const projects = useSelector(state => state.ProjectSlice.projects)
  const dispatch = useDispatch()
  return (
    <div className="sidebarWrapper">
      {/* <QuickFind /> */}
      <div className="workspaceWrapper">
        <div
          className="addNewWorkspace"
          onClick={() => dispatch(createNewProject())}
        >
          +
        </div>
        <span className="workspace">Workspace</span>
      </div>
      <div className="projectsWrapper">
        {projects.map((p) => (
          <Project project={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
