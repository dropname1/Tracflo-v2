import React from 'react'
import arrow from '../../../assets/ui/9.arrow.svg'
import Progress from './GoalProgress'
import SliceTask from './SliceTask'
import GoalContextmenu from './GoalContextmenu'

export default function Goal({goal}) {
  return (
    <div className="goalAndTasksWrapper">
      <div className="goalContextMenu">
        <GoalContextmenu />
      </div>
      <div className="goalWrapper">
        <img className="goalArrow" src={arrow} width="14" height="8" alt="" />
        <div className="goalTitle">{goal.title}</div>
        <div className="progressWrapper">
          <Progress progressState={goal.progress} />
        </div>
        <div className="goalOptionButton">...</div>
      </div>
      <div className="goalTasksWrapper">
        {goal && goal.slices.map( task => <SliceTask task={task} key={task.id} />)}
      </div>
    </div>
  );
}
