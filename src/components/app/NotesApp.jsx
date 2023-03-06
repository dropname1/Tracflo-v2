import React, {useState} from 'react'
import AddNote from '../../modules/AppWorkArea/NotesApp/AddNote'
import Note from '../../modules/AppWorkArea/NotesApp/Note'
import ClearInput from '../../modules/Ceneral/clearInput'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNoteApp } from '../../modules/Store/StoreSlieces/NotesSlice'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function NotesApp({isActiveApp}) {

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
    return noteApp.notes.map((note) => {
      return (
        <CSSTransition key={note.id} classNames='fade' timeout={250}>
          <Note note={note} />
        </CSSTransition>
      );
    });
  };

  return (
    <TransitionGroup>
      <CSSTransition key={isActiveApp} classNames="fade2" timeout={250}>
        <div
          className="notesApp"
          style={{
            height: isActiveApp === "Notes" ? "initial" : "0",
            overflow: isActiveApp === "Notes" ? "initial" : "hidden",
          }}
        >
          <ClearInput />
          <div className="inputAndNotesWrapper">
            <AddNote activeProject={activeProject} />
            <div className="notesWrapper">
              <TransitionGroup>
                {notesApps && notesApps.map(noteApp)}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
