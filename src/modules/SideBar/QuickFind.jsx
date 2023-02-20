import React from 'react'
import search from '../../assets/ui/1.search.svg'

export default function QuickFind() {
  return (
    <div className="quickFind">
      <img className='search' src={search} alt="" />
      <span>Quick find</span>
    </div>
  );
}
