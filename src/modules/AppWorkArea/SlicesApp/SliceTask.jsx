import React from 'react'

export default function SliceTask({task}) {
  return (
    <div className='sliceTaskWrapper'>
        <input type="checkbox" className='sliceTaskChecbox' />
        <div className="sliceTaskTitle">{task.title}</div>
        <div className="removeSliceTask">&times;</div>
    </div>
  )
}
