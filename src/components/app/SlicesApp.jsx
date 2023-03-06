import React from "react";
import ClearInput from "../../modules/Ceneral/clearInput";
import AddGoal from "../../modules/AppWorkArea/SlicesApp/AddGoal";
import Goal from "../../modules/AppWorkArea/SlicesApp/Goal";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function SlicesApp({ isActiveApp }) {
  const goalApps = useSelector((state) => state.SlicesSliece.goalApps);
  const activeProject = useSelector(
    (state) => state.ProjectSlice.activeProjectId.payload
  );

  const goalApp = (goalApp) => {
    if (goalApp.appId === activeProject) {
      return goalApp.goals.map((goal) => {
        return (
          <CSSTransition key={goal.id} classNames='fade' timeout={250}>
            <Goal goal={goal} activeApp={activeProject} />
          </CSSTransition>
        );
      });
    }
  };

  return (
    <TransitionGroup>
      <CSSTransition key={isActiveApp} classNames="fade2" timeout={250}>
        <div
          className="SliceWrapper"
          style={{
            height: isActiveApp === "Slices" ? "initial" : "0",
            overflow: isActiveApp === "Slices" ? "initial" : "hidden",
          }}
        >
          <ClearInput />
          <div className="GoalsAndInputWrapper">
            <AddGoal activeApp={activeProject} />
            <TransitionGroup>{goalApps.map(goalApp)}</TransitionGroup>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
