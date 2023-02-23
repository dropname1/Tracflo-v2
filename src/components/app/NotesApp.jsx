import React, {useState} from 'react'
import AddNote from '../../modules/AppWorkArea/NotesApp/AddNote'
import Note from '../../modules/AppWorkArea/NotesApp/Note'
import ClearInput from '../../modules/Ceneral/clearInput'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNoteApp } from '../../modules/Store/StoreSlieces/NotesSlice'

export default function NotesApp() {

  const notesApps = useSelector((state) => state.NotesSlice.notesApps);
  const activeProject = useSelector(state => state.ProjectSlice.activeProjectId.payload)
  const dispath = useDispatch()


    useEffect(()=> {
      dispath(setActiveNoteApp(activeProject))
    })


  const noteApp = (noteApp) => {
    if (noteApp.appId === activeProject) {
      return note(noteApp)
    }
  } 
   
  const note = (noteApp) => {
    return noteApp.notes.map((note, index) => {
      return <Note note={note} key={note.id} />;
    });
  };

  return (
    <div className="notesApp">
      <ClearInput />
      <div className="inputAndNotesWrapper">
        <AddNote activeProject={activeProject} />
        <div className="notesWrapper">
          {notesApps && notesApps.map(noteApp)}
        </div>
      </div>
    </div>
  );
}
