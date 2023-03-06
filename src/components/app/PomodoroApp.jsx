import React from "react";
import Pomadoro from "../../modules/AppWorkArea/PomodoroApp/Pomodoro";
import History from "../../modules/AppWorkArea/PomodoroApp/History";
import { useSelector } from "react-redux";


export default function PomodoroApp({ isActiveApp }) {
  const activeApp = useSelector(
    (state) => state.ProjectSlice.activeProjectId.payload
  );
  return (
    <div
      className="pomodoroAppWrapper"
      style={{
        height: isActiveApp === "Pomodoro" ? "initial" : "0",
        overflow: isActiveApp === "Pomodoro" ? "initial" : "hidden",
      }}
    >
      <Pomadoro activeApp={activeApp} />
      <History activeApp={activeApp} />
    </div>
  );
}
