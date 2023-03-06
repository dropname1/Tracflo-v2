import React from "react";
import RelaxationItem from "./PomodoroHistoryItems/PomoRelaxationTime";
import WorkItem from "./PomodoroHistoryItems/PomoWorkTime";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removePomodoroItem } from "../../Store/StoreSlieces/PomadoroSlice";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
        return (
          <CSSTransition key={item.id} classNames='fade' timeout={250}>
            <WorkItem pomo={item} activeApp={activeApp} />
          </CSSTransition>
        );
      }
      if (item.type === "Relaxation") {
        return (
          <CSSTransition key={item.id} classNames="fade" timeout={250}>
            <RelaxationItem pomo={item} activeApp={activeApp} />
          </CSSTransition>
        );
      }
    });
  }

  return (
    <div className="historyWrapper">
      <div className="historyTitle">History</div>
      <div className="historyItemsWrapper">
        <TransitionGroup>{pomodoroApps && pomodoroApp()}</TransitionGroup>
      </div>
    </div>
  );
}
