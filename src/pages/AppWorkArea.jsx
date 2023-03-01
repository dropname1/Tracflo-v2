import React, { useState } from 'react'
import AppComponent from './AppComponent'
import { useSelector } from 'react-redux'

export default function AppWorkArea() {
const [activeApp, setActiveApp] = useState('Slices')
const Apps = useSelector(state => state.AppsSlice.apps)
  return (
    <div className='AppWorkAreaWrapper'>
        <div className="Apps">
          {Apps.map(app => {
           return ( 
            <div className='appWrapper' key={app.id} onClick={()=> setActiveApp(app.title)}>
              <img className='appImage' width='15' src={app.svgImage} />
              <div className="appTitle">{app.title}</div>
              { app.createdItems > 0 && <div className="countItem">{app.createdItems}</div>}
            </div>
            )
          })}
        </div>
        <div className="AppComponentArea">
          <AppComponent activeApp={activeApp}/>
        </div>
    </div>
  )
}
