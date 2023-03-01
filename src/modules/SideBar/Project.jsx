import React from "react";
import trash from "../../assets/ui/10.projectTrash.svg";
import { useDispatch } from "react-redux";
import { selectProject } from "../Store/StoreSlieces/ProjectSlice";
import { useSelector } from "react-redux";
import { removeProject } from "../Store/StoreSlieces/ProjectSlice";
import EditProject from "./EditProjectOption/EditProject";

export default function Project({ project }) {
  const activeProject = useSelector(
    (state) => state.ProjectSlice.activeProjectId.payload
  );
  const dispatch = useDispatch();

  return (
    <div
      className="Project"
      style={{
        background: activeProject === project.id ? "#F1E9E7" : "initial",
      }}
      onClick={() => dispatch(selectProject(project.id))}
    >
      <div className="circle"></div>
      <div className="ProjectTitle">
        <EditProject project={project} />
      </div>
      <img
        className="projectTrash"
        src={trash}
        width="14"
        height="17"
        alt=""
        onClick={() => dispatch(removeProject(project.id))}
      />
    </div>
  );
}
