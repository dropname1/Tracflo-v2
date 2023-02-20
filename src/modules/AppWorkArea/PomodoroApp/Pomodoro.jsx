import React from "react";

export default function Pomodoro() {
  return (
    <div className="pomadoroWrapper">
      <div className="pomadoroTimer">24:45</div>
      <div className="pomadoroButtons">
        <div className="buttonsGroup1">
          <button className="buttonStart">start</button>
          <button className="buttonStop">stop</button>
        </div>
        <div className="buttonsGroup2">
          <button className="buttonRefresh">refresh</button>
          <button className="buttonRelaxation">relaxation</button>
        </div>
      </div>
    </div>
  );
}
