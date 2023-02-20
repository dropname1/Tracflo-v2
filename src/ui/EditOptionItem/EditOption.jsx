import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import module from './EditOption.module.css'

export default function EditWithClick() {
  const [text, setText] = useState("sffs");
  const [edit, setEdit] = useState(false);
  const [focus, setFocus] = useState(false);
  const lastRef = useRef(null);

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
          maxLength="20"
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
