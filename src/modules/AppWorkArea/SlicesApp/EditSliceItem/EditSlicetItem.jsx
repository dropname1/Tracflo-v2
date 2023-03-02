import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editSlice } from "../../../Store/StoreSlieces/SlicesSliece";
import module from './EditSlicetItem.module.css'

export default function EditSliceItem({task, activeApp, goalId}) {
  const [text, setText] = useState(task.title);
  const [edit, setEdit] = useState(false);
  const [focus, setFocus] = useState(false);
  const lastRef = useRef(null);

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
    if (e.code === "Enter" && text.trim()) {
      setEdit(false);
    }
  }
  function blur() {
    setEdit(false);
    setFocus(false);
    dispatch(editSlice({ id: task.id, activeApp: activeApp, goalId: goalId, title: text }));
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
        <input
          className={module.EditableInput}
          ref={focus ? lastRef : undefined}
          onBlurCapture={() => blur()}
          onKeyUpCapture={(e) => editFinish(e)}
          style={{ display: `${edit ? "block" : "none"}`, }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
