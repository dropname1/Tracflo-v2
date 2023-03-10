import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../Store/StoreSlieces/TasksSlice'

export default function AddTask({activeProject}) {

  const dispatch = useDispatch()

  function addTaskEvent (e) {
    if(e.code === 'Enter' && e.target.value.trim()) {
      dispatch(addTask({ task: e.target.value, activeProject: activeProject }));
      e.target.value = ''
    }
  }
  return (
    <input type="text" className='AddTask' onKeyUpCapture={(e)=> addTaskEvent(e)}/>
  )
}
