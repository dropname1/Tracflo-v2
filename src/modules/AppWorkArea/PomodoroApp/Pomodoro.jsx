import React from "react";
import { useState } from "react";
import { useTimer } from "use-timer";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPomodoroItem } from "../../Store/StoreSlieces/PomadoroSlice";

export default function Pomodoro({ activeApp }) {
  const [isWork, setIsWork] = useState(true);
  const dispatch = useDispatch();

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

  function secondFormater(initialTime, timeType) {
    return dayjs((initialTime - timeType) * 1000).format("mm:ss");
  }

  function pomodoroStart() {
    if (isWork) {
      workStart();
    } else relaxStart();
  }
  function pomodoroPause() {
    if (isWork) {
      workPause();
    } else relaxPause();
  }


  function pomodoroReset() {
    workReset();
    relaxReset();
    if (isWork && workTime < 1500) {
      console.log(workTime)
      dispatch(
        addPomodoroItem({
          activeApp: activeApp,
          type: "Pomadoro",
          time: secondFormater(1500, workTime),
        })
      );
    } 
    
    if (!isWork && relaxTime < 300) {
      dispatch(
        addPomodoroItem({
          activeApp: activeApp,
          type: "Relaxation",
          time: secondFormater(300, relaxTime),
        })
      );
    }
  }


  function pomodoroSwitch() {
    workReset();
    relaxReset();
    if (isWork && workTime < 1500) {
      dispatch(
        addPomodoroItem({
          activeApp: activeApp,
          type: "Pomadoro",
          time: secondFormater(1500, workTime),
        })
      );
    } 

    if (!isWork && relaxTime < 300) {
      dispatch(
        addPomodoroItem({
          activeApp: activeApp,
          type: "Relaxation",
          time: secondFormater(300, relaxTime),
        })
      );
    }
    setIsWork(!isWork);
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
