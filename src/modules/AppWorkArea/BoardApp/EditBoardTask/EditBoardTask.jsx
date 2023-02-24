import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editTaskInBoard } from "../../../Store/StoreSlieces/BoarsSlice";
import module from './EditBoardTask.module.css'

export default function EditBoardTask({task}) {
  const [text, setText] = useState(task.title);
  const [edit, setEdit] = useState(false);
  const [focus, setFocus] = useState(false);
  const lastRef = useRef(null);

  const activeProject = useSelector(state => state.ProjectSlice.activeProjectId.payload)
  const dispatch = useDispatch()

  useEffect(() => {
    if (lastRef.current) {
      lastRef.current.focus();
    }
  }, [focus]);
  function editTask() {
    setEdit(true);
    setFocus(true);
  }
  function editFinish(e) {
    if (e.code === "NumpadEnter" && text.trim()) {
      setEdit(false);
    }
  }
  function blur() {
    setEdit(false);
    setFocus(false);
    dispatch(editTaskInBoard({taskId: task.id ,title: text, activeProject: activeProject, boardId: task.boardId}))
  }

  function autoSize(e) {
    let textarea = e.target;
    textarea.style.height = "0";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  return (
    <div>
      <div>
        <div
          style={{ display: `${edit ? "none" : "block"}` }}
          className={module.EditableText}
          onClick={(e) => editTask()}
        >
          {text}
        </div>
        <textarea
          className={module.EditableInput}
          ref={focus ? lastRef : undefined}
          onBlurCapture={() => blur()}
          onKeyUpCapture={(e) => editFinish(e)}
          style={{ display: `${edit ? "block" : "none"}` }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={(e) => autoSize(e)}
          onInput={(e) => autoSize(e)}
        />
      </div>
    </div>
  );
}
