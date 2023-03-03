import React, { useEffect } from 'react'
import { useState } from 'react';

export default function SwitchTheme() {
  const [switchTheme, setSwitchTheme] = useState(false);
  function openSwitchTheme() {
    setSwitchTheme(!switchTheme);
  }

  const [activeTheme, setActiveTheme] = useState("Classic");

  useEffect(() => {
    setActiveTheme(JSON.parse(localStorage.getItem("theme"))) ?? null
  }, []);

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
  
useEffect(()=> {
  localStorage.setItem("theme", JSON.stringify(activeTheme));
},[activeTheme])

  function themeBlur () {
    setTimeout(()=> {
      setSwitchTheme(false);
    },100)
  }

  return (
    <div className="switchThemeWrapper">
      <input
        className="switchTheme"
        onClick={() => openSwitchTheme()}
        onBlur={() => themeBlur()}
      />

      {switchTheme ? (
        <div className="switchThemeOptions">
          <div
            className="switchThemeOption"
            onClick={() => setActiveTheme("Classic")}
          >
            <input
              className="radioSwitchTheme"
              type="radio"
              name="switchTheme"
              defaultChecked={activeTheme === "Classic"}
              onClick={() => setActiveTheme("Classic")}
            />
            Classic
          </div>
          <div
            className="switchThemeOption"
            onClick={() => setActiveTheme("Gray")}
          >
            <input
              className="radioSwitchTheme"
              type="radio"
              name="switchTheme"
              defaultChecked={activeTheme === "Gray"}
              onClick={() => setActiveTheme("Gray")}
            />
            Gray
          </div>
          <div
            className="switchThemeOption"
            onClick={() => setActiveTheme("Pink - Gold")}
          >
            <input
              className="radioSwitchTheme"
              type="radio"
              name="switchTheme"
              defaultChecked={activeTheme === "Pink - Gold"}
              onClick={() => setActiveTheme("Pink - Gold")}
            />
            Pink - Gold
          </div>
        </div>
      ) : null}
    </div>
  );
}
