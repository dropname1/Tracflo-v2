import React from 'react'
import ClearInput from '../../modules/Ceneral/clearInput'
import AddGoal from '../../modules/AppWorkArea/SlicesApp/AddGoal'
import Goal from '../../modules/AppWorkArea/SlicesApp/Goal'
import { useSelector } from 'react-redux'

export default function SlicesApp() {

const goalApps = useSelector((state) => state.SlicesSliece.goalApps);
const activeProject = useSelector((state) => state.ProjectSlice.activeProjectId.payload);

const goalApp = (goalApp) => {
    if (goalApp.appId === activeProject) {
      return goalApp.goals.map(goal => {
        return <Goal key={goal.id} goal={goal} activeApp={activeProject} />;
      } )
    }
  }


  return (
    <div className="SliceWrapper">
      <ClearInput />
      <div className="GoalsAndInputWrapper">
        <AddGoal activeApp={activeProject} />
        {goalApps.map(goalApp)}
      </div>
    </div>
  );
}
