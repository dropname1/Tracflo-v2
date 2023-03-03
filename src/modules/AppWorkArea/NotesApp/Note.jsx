import React from 'react'
import expand from '../../../assets/ui/9.arrow.svg'
import trash from '../../../assets/ui/8.Trash.svg'
import { useEffect } from 'react'
import { useState } from 'react'
import { removeNote } from '../../Store/StoreSlieces/NotesSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import EditNote from './EditOptionItem/EditNote'
export default function Note({note}) {
  const [isFix, setIsFix] = useState(false)

  const dispatch = useDispatch()
  const activeNoteApp = useSelector(state => state.ProjectSlice.activeNoteApp.payload)

  function fixNote () {
    setIsFix(!isFix)
  }
  
  return (
    <div className="noteWrapper">
      <div className="expandNote" style={{border: isFix? '1px solid #000' : 'none'}} onClick={()=> fixNote()}></div>
      <EditNote className="noteText" note={note} isFixNote={isFix}/>
      <img
        src={trash}
        alt="trash note"
        className="trashNote"
        onClick={() => dispatch(removeNote(note.id))}
      />
    </div>
  );
}
