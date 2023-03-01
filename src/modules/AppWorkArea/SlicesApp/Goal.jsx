import React from "react";
import arrow from "../../../assets/ui/9.arrow.svg";
import Progress from "./GoalProgress";
import SliceTask from "./SliceTask";
import GoalContextmenu from "./GoalContextmenu";
import AddSlce from "./AddSlce";
import { useState } from "react";


export default function Goal({ goal, activeApp }) {
  const [isAddSlice, setIsAddSlice] = useState(false);
  const [isExpand, setIsExpand] = useState(true);
  const [isContextMenu, setIsContextMenu] = useState(false)


  function isAddSliceOpen() {
    setIsAddSlice(!isAddSlice);
  }
  function expandSlices () {
    setIsExpand(!isExpand)
  }
  function contextMenuOpen (e) {
    setIsContextMenu(!isContextMenu);
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
          <div className="goalTitle">{goal.title}</div>
          <div className="progressWrapper">
            <Progress progressState={goal.progress} slices={goal.slices} />
          </div>
          <div
            className="goalOptionButton"
            onClick={(e) => contextMenuOpen(e)}
          >
            ...
          </div>
        </div>
        <div
          className="slicesAndAddSliceWrapper"
          style={{ display: isExpand ? "inherit" : "none" }}
        >
          <div className="addSlice">
            {isAddSlice && <AddSlce activeApp={activeApp} goalId={goal.id} />}
          </div>
          <div className="goalTasksWrapper">
            {goal &&
              goal.slices.map((task) => (
                <SliceTask
                  task={task}
                  key={task.id}
                  activeApp={activeApp}
                  goalId={goal.id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
