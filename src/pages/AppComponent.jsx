import React, { Fragment } from 'react'
import NotesApp from '../components/app/NotesApp'
import TasksApp from '../components/app/TasksApp'
import BoardApp from '../components/app/BoardApp'
import SlicesApp from '../components/app/SlicesApp'
import PomodoroApp from '../components/app/PomodoroApp'
import TrashApp from '../components/app/TrashApp'

export default function AppComponent({activeApp}) {
function renderApp (activeApp) {
    return (
      <Fragment>
        <NotesApp isActiveApp={activeApp} />
        <TasksApp isActiveApp={activeApp} />
        <BoardApp isActiveApp={activeApp} />
        <SlicesApp isActiveApp={activeApp} />
        <PomodoroApp isActiveApp={activeApp} />
        <TrashApp isActiveApp={activeApp} />
      </Fragment>
    );   
}
  return (
    <div>{renderApp(activeApp)}</div>
  )
}
