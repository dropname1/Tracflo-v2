import React from "react";
import { useState } from "react";
import { useTimer } from "use-timer";
import dayjs from "dayjs";
import { useEffect } from "react";

export default function Pomodoro() {
  const [isWork, setIsWork] = useState(true)

  const {
    time: workTime,
    start: workStart,
    pause: workPause,
    reset: workReset,
  } = useTimer({
    initialTime: 25 * 60,
    timerType: "DECREMENTAL",
  });

  const {
    time: relaxTime,
    start: relaxStart,
    pause: relaxPause,
    reset: relaxReset,
  } = useTimer({
    initialTime: 5 * 60,
    timerType: "DECREMENTAL",
  });
  
  
  function pomodoroStart() {
    if(isWork) {
      workStart()
    } else relaxStart()
  }
  function pomodoroPause() {
    if (isWork) {
      workPause();
    } else relaxPause();
    
  }
  function pomodoroReset() {
    if (isWork) {
      workReset();
    } else relaxReset();
    
  }
  function pomodoroSwitch() {
    if(isWork) {
      workReset();
    } else relaxReset();
    setIsWork(!isWork)
  }

  return (
    <div className="pomadoroWrapper">
      <div
        className="pomadoroTimer"
        style={{
          borderColor: isWork ? "#F08786" : "#9dd8a0",
          transition: "border-color 0.3s",
        }}
      >
        <div>
          {dayjs((isWork ? workTime : relaxTime) * 1000).format("mm:ss")}
        </div>
      </div>
      <div className="pomadoroButtons">
        <div className="buttonsGroup1">
          <button className="buttonStart" onClick={() => pomodoroStart()}>
            start
          </button>
          <button className="buttonStop" onClick={() => pomodoroPause()}>
            pause
          </button>
        </div>
        <div className="buttonsGroup2">
          <button className="buttonRefresh" onClick={() => pomodoroReset()}>
            reset
          </button>
          <button
            className="buttonRelaxation"
            onClick={() => pomodoroSwitch()}
            style={{
              background: isWork ? "#E9F8EA" : "#F3AAA8",
              transition: "background 0.3s",
            }}
          >
            {isWork ? "relax time" : "work time"}
          </button>
        </div>
      </div>
    </div>
  );
}
