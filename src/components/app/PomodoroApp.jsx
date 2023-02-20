import React from "react";
import Pomadoro from "../../modules/AppWorkArea/PomodoroApp/Pomodoro";
import History from "../../modules/AppWorkArea/PomodoroApp/History";

export default function PomodoroApp() {
  return (
    <div className="pomodoroAppWrapper">
      <Pomadoro />
      <History />
    </div>
  );
}
