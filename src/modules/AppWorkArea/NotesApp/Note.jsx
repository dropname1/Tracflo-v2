import React from 'react'
import expand from '../../../assets/ui/9.arrow.svg'
import trash from '../../../assets/ui/8.Trash.svg'
import { useEffect } from 'react'
import { removeNote } from '../../Store/StoreSlieces/NotesSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
export default function Note({note, index}) {

  const dispatch = useDispatch()
  const activeNoteApp = useSelector(state => state.ProjectSlice.activeNoteApp.payload)

  
  return (
    <div className="noteWrapper">
      <img src={expand} alt="expand note" className="expandNote rotate90" />
      <textarea className="noteText" defaultValue={note.title} />
      <img
        src={trash}
        alt="trash note"
        className="trashNote"
        onClick={() => dispatch(removeNote(note.id))}
      />
    </div>
  );
}
