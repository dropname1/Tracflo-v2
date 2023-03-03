import React from "react";
import RelaxationItem from "./PomodoroHistoryItems/PomoRelaxationTime";
import WorkItem from "./PomodoroHistoryItems/PomoWorkTime";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removePomodoroItem } from "../../Store/StoreSlieces/PomadoroSlice";

export default function History({ activeApp }) {
  const pomodoroApps = useSelector((state) => state.PomodoroSlice.pomodoroApps);
  const dispatch = useDispatch();

  function pomodoroApp() {
    return pomodoroApps.map((pomodoroApp) => {
      if (pomodoroApp.appId === activeApp) {
        return pomodoroItem(pomodoroApp);
      }
    });
  }

  function pomodoroItem(pomodoroApp) {
    return pomodoroApp.pomodoroItems.map((item) => {
      if (item.type === "Pomadoro") {
        return <WorkItem pomo={item} key={item.id} activeApp={activeApp} />;
      }
      if (item.type === "Relaxation") {
        return (
          <RelaxationItem pomo={item} key={item.id} activeApp={activeApp} />
        );
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
