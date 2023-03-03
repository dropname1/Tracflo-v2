import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editNote } from "../../../Store/StoreSlieces/NotesSlice";
import module from "./EditNote.module.css";

export default function EditNote({ note, isFixNote }) {
  const [text, setText] = useState(note.title);
  const [edit, setEdit] = useState(false);
  const [focus, setFocus] = useState(false);
  const lastRef = useRef(null);

  const activeProject = useSelector(
    (state) => state.ProjectSlice.activeProjectId.payload
  );
  const dispatch = useDispatch();

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
    if (e.code === "NumpadEnter") {
      setEdit(false);
    }
  }
  function blur() {
    setTimeout(()=> {
      setEdit(false);
      setFocus(false);
      dispatch(
        editNote({ title: text, activeProject: activeProject, noteId: note.id })
      );
    }, 100)
    
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
          style={{
            display: `${edit ? "none" : "block"}`,
            height: isFixNote ? "auto" : "32px",
            maxHeight: isFixNote ? 'fit-content' : 'none'
          }}
          className={module.EditableText}
          onClick={(e) => editTask()}
        >
          {text}
        </div>
        <textarea
          rows="1"
          className={module.EditableTexrArea}
          ref={focus ? lastRef : undefined}
          onBlurCapture={() => blur()}
          onKeyUpCapture={(e) => editFinish(e)}
          style={{ display: `${edit ? "block" : "none"}` }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={(e) => autoSize(e)}
          onInput={(e) => autoSize(e)}
        ></textarea>
      </div>
    </div>
  );
}
