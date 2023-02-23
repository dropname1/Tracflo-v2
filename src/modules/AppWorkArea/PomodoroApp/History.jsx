import React from 'react'
import RelaxationItem from './PomodoroHistoryItems/PomoRelaxationTime'
import WorkItem from './PomodoroHistoryItems/PomoWorkTime'
import {useSelector} from 'react-redux'

export default function History() {
  const pomodoroApps = useSelector((state) => state.PomodoroSlice.pomodoroApps);
  const activeProject = useSelector((state) => state.ProjectSlice.activeProjectId.payload);

  function pomodoroApp() {
    return pomodoroApps.map((pomodoroApp) => {
      if (pomodoroApp.appId === activeProject) {
        return pomodoroItem(pomodoroApp);
      }
    });
  }

  function pomodoroItem(pomodoroApp) {
    console.log(pomodoroApp)
    return pomodoroApp.pomodoroItems.map((item) => {
      if (item.type === "Pomadoro") {
        return <WorkItem pomo={item} key={item.id} />;
      }
      if (item.type === "Relaxation") {
        return <RelaxationItem pomo={item} key={item.id} />;
      }
    });
  }
  
  return (
    <div className="historyWrapper">
      <div className="historyTitle">History</div>
      <div className="historyItemsWrapper">{pomodoroApps && pomodoroApp()}</div>
    </div>
  );
}


