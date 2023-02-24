import React from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../../Store/StoreSlieces/NotesSlice'

export default function AddNote({activeProject}) {

  const dispath = useDispatch()

  function addNoteEvent(e) {
    if (e.code === "NumpadEnter") {
      e.preventDefault()
      dispath(addNote({note: e.target.value}));
      e.target.value = ''
    }
  }
  return (
    <textarea
      type="text"
      className="addNote"
      onKeyUpCapture={(e)=> addNoteEvent(e)}
    />
  );
}
