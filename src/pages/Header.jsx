import React from 'react'
import logo from '../assets/favicon/tracflo.png'
import SwitchTheme from '../modules/Header/SwitchTheme'

export default function Header() {
  return (
    <div className='header'>
      <img className='logoImage' src={logo} width='24' height='24' alt="" />
      <div className='workcspaceHeaderTitle'>Welcom to Tracflo</div>
      <SwitchTheme/>
    </div>
  )
}
