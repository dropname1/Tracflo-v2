import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProject } from "../../Store/StoreSlieces/TrashSlice";
import { recoverProject } from "../../Store/StoreSlieces/TrashSlice";
import { recoverProject_Trash } from "../../Store/StoreSlieces/ProjectSlice";


export default function RemovedProject({project}) {
  const [isContextMenu, setIsContextNemu] = useState(false)
  const dispatch = useDispatch()

  function openContextMenu () {
    setTimeout(()=> {
      setIsContextNemu(!isContextMenu);
    },100)
  }
  function blurContextMenu () {
    setTimeout(() => {
      setIsContextNemu(false);
    }, 100);
  }

  function recoverItem() {
    dispatch(recoverProject_Trash({id: project.id, title: project.title}))
    dispatch(recoverProject(project.id));
  }
  function removeItem() {
    dispatch(removeProject(project.id))
  }
  return (
    <div className="trashProject">
      <div className="circleTrash"></div>
      <div className="ProjectTitle">{project.title}</div>
      <input
        maxLength={0}
        className="trashOptions"
        onClick={() => openContextMenu()}
        placeholder="..."
        onBlur={() => blurContextMenu()}
      />
      {isContextMenu && (
        <div className="trashContextMenu">
          <div className="trashRecover" onClick={() => recoverItem()}>
            Recover
          </div>
          <div className="trashRemove" onClick={() => removeItem()}>
            Delete
          </div>
        </div>
      )}
    </div>
  );
}
