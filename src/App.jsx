import React from 'react'
import Header from './pages/Header';
import SideBar from './pages/SideBar'
import AppWorkArea from './pages/AppWorkArea'

export default function App() {

  return (
    <div className='App'>
      <Header/>
      <div className="SideBarAndWorkAreaWrapper">
        <SideBar/>
        <AppWorkArea/>
      </div>
    </div>
  );
}

