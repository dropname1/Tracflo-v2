import React from 'react'
import trash from '../../../assets/ui/8.Trash.svg'

export default function Task({task}) {
  return (
    <div className='taskWrapper'>
        <input type="checkbox" className='taskCheckbox' />
        <span className='taskTitle'> {task.title} </span>
        <img src={trash} alt="f" className='taskTrash'/>
    </div>
  )
}
