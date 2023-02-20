import React from 'react'
import PomodoroWorkTimeItem from '../../modules/AppWorkArea/PomodoroApp/PomodoroHistoryItems/PomoWorkTime'
import PomodoroRelaxationTimeItem from '../../modules/AppWorkArea/PomodoroApp/PomodoroHistoryItems/PomoRelaxationTime'
import TodoTask from '../../modules/AppWorkArea/TasksApp/Task'
import Note from '../../modules/AppWorkArea/NotesApp/Note'

export default function TrashApp() {
  return (
    <div className="trashAppWrapper">
      <div className="trashButtons">
        <button className="clearTrash">Clear trash</button>
        <button className="RecoverTrash">Recover All</button>
      </div>
      <div className="trashItemsWrapper">
        {/* <TodoTask />
        <PomodoroRelaxationTimeItem />
        <Note />
        <PomodoroRelaxationTimeItem />
        <PomodoroWorkTimeItem />
        <Note />
        <Note />
        <Note /> */}
      </div>
    </div>
  );
}
