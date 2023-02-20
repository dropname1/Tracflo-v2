import React from 'react'
import NotesApp from '../components/app/NotesApp'
import TasksApp from '../components/app/TasksApp'
import BoardApp from '../components/app/BoardApp'
import SlicesApp from '../components/app/SlicesApp'
import PomodoroApp from '../components/app/PomodoroApp'
import TrashApp from '../components/app/TrashApp'

export default function AppComponent({activeApp}) {

function renderApp (activeApp) {
    switch(activeApp) {
            case 'Notes': return <NotesApp/>; break;
            case 'Tasks': return <TasksApp/>; break;
            case 'Board': return <BoardApp/>; break;
            case 'Slices': return <SlicesApp/>; break;
            case 'Pomodoro': return <PomodoroApp/>; break;
            case 'Trash': return <TrashApp/>; break;
            default: return null
        }
}
  return (
    <div>{renderApp(activeApp)}</div>
  )
}
