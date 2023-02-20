import React from 'react'
import RelaxationItem from './PomodoroHistoryItems/PomoRelaxationTime'
import WorkItem from './PomodoroHistoryItems/PomoWorkTime'
import {useSelector} from 'react-redux'

export default function History() {
  const pomodoroItems = useSelector((state) => state.PomodoroSlice.pomodoroItems);
  return (
    <div className='historyWrapper'>
    <div className="historyTitle">History</div>
    <div className="historyItemsWrapper">
        {pomodoroItems && pomodoroItems.map(pomo => {
          if (pomo.type === 'Pomadoro') {
            return <WorkItem pomo={pomo} key={pomo.id}/>
          } 
          if (pomo.type === "Relaxation") {
            return <RelaxationItem pomo={pomo} key={pomo.id} />;
          }
        })}
    </div>
    </div>
  )
}
