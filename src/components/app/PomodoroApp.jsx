import React from "react";
import Pomadoro from "../../modules/AppWorkArea/PomodoroApp/Pomodoro";
import History from "../../modules/AppWorkArea/PomodoroApp/History";
import { useSelector } from "react-redux";


export default function PomodoroApp() {
  const activeApp = useSelector(
    (state) => state.ProjectSlice.activeProjectId.payload
  );
  return (
    <div className="pomodoroAppWrapper">
      <Pomadoro activeApp={activeApp}/>
      <History activeApp={activeApp}/>
    </div>
  );
}
