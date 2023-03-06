import React from "react";
import arrow from "../../../assets/ui/9.arrow.svg";
import Progress from "./GoalProgress";
import SliceTask from "./SliceTask";
import GoalContextmenu from "./GoalContextmenu";
import AddSlce from "./AddSlce";
import { useState } from "react";
import EditGoalItem from "./EditGoalItem/EditGoalItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";


export default function Goal({ goal, activeApp }) {
  const [isAddSlice, setIsAddSlice] = useState(false);
  const [isExpand, setIsExpand] = useState(true);
  const [isContextMenu, setIsContextMenu] = useState(false);

  function isAddSliceOpen() {
    setIsAddSlice(!isAddSlice);
  }
  function expandSlices() {
    setIsExpand(!isExpand);
  }
  function contextMenuOpen(e) {
    setIsContextMenu(!isContextMenu);
  }
  function blurElement(e) {
    setTimeout(() => {
      setIsContextMenu(false);
    }, 100);
  }
  return (
    <div className="goalAndTasksWrapper">
      <div className="goalContextMenu">
        {isContextMenu && (
          <GoalContextmenu
            goal={goal}
            activeApp={activeApp}
            isAddSliceOpen={isAddSliceOpen}
          />
        )}
      </div>
      <div>
        <div className="goalWrapper">
          <img
            className={["goalArrow", isExpand ? "rotate180" : null].join(" ")}
            src={arrow}
            width="14"
            height="8"
            alt=""
            onClick={() => expandSlices()}
          />
          <div className="goalTitle">
            <EditGoalItem goal={goal} activeApp={activeApp} />
          </div>
          <div className="progressWrapper">
            <Progress progressState={goal.progress} slices={goal.slices} />
          </div>
          <input
            className="goalOptionButton"
            onClick={(e) => contextMenuOpen(e)}
            onBlur={(e) => blurElement(e)}
            placeholder="..."
            maxLength={0}
          />
        </div>
        <div
          className="slicesAndAddSliceWrapper"
          style={{ display: isExpand ? "inherit" : "none" }}
        >
          <div className="addSlice">
            {isAddSlice && <AddSlce activeApp={activeApp} goalId={goal.id} />}
          </div>
          <div className="goalTasksWrapper">
            <TransitionGroup>
              {goal &&
                goal.slices.map((task) => (
                  <CSSTransition key={task.id} classNames='fade' timeout={250}>
                    <SliceTask
                      task={task}
                      activeApp={activeApp}
                      goalId={goal.id}
                    />
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
