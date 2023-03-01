import React from 'react'
import { useDispatch } from 'react-redux'
import { addGoal } from '../../Store/StoreSlieces/SlicesSliece'

export default function AddGoal({activeApp}) {
  const dispatch = useDispatch()
  function addGoalSlice(e) {
    if (e.code === "Enter") {
      dispatch(addGoal({title: e.target.value, activeApp: activeApp}));
      e.target.value = ''
    }
  }
  return (
    <div>
      <input type="text" className='addGoal' onKeyUpCapture={(e) => addGoalSlice(e)}/>
    </div>
  )
}
