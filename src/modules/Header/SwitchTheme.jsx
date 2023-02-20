import React, { useEffect } from 'react'
import { useState } from 'react';

export default function SwitchTheme() {
  const [switchTheme, setSwitchTheme] = useState(false);
  function openSwitchTheme() {
    setSwitchTheme(!switchTheme);
  }

  const [activeTheme, setActiveTheme] = useState("Classic");

  useEffect(() => {
    let ROOT = document.querySelector("BODY");
    let SIDEBAR = document.querySelector(".sidebarWrapper");
    switch (activeTheme) {
      case "Classic":
        ROOT.style.background = "white";
        SIDEBAR.style.background = "#F7F6F3";
        break;
      case "Gray":
        ROOT.style.background = "#E1E1E1";
        SIDEBAR.style.background = "#C6C6C6";
        break;
      case "Pink - Gold":
        ROOT.style.background = "linear-gradient(90deg, #FBE77D, #FF79C1)";
        SIDEBAR.style.background = "#c6c6c662";
        break;
    }
  }, [activeTheme])
  

  return (
    <div className="switchThemeWrapper">
      <div className="switchTheme" onClick={() => openSwitchTheme()}></div>

      {switchTheme ? (
        <div className="switchThemeOptions">
          <div className="switchThemeOption">
            <input
              className="radioSwitchTheme"
              type="radio"
              name="switchTheme"
              onClick={() => setActiveTheme("Classic")}
            />
            Classic
          </div>
          <div className="switchThemeOption">
            <input
              className="radioSwitchTheme"
              type="radio"
              name="switchTheme"
              onClick={() => setActiveTheme("Gray")}
            />
            Gray
          </div>
          <div className="switchThemeOption">
            <input
              className="radioSwitchTheme"
              type="radio"
              name="switchTheme"
              onClick={() => setActiveTheme("Pink - Gold")}
            />
            Pink - Gold
          </div>
        </div>
      ) : null}
    </div>
  );
}
