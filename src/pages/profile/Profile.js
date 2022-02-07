import React from 'react'
import '../home/home.css'
import Topbar from '../../components/menu/topbar/Topbar'
import SidebarLeft from '../../components/menu/sidebar/SidebarLeft'
import SidebarRight from '../../components/menu/sidebar/SidebarRight'

export default function Profile() {
  return (
    <>
      <div className="topbar-fixed">
        <Topbar />
      </div>
      <div className="body-container">
        <SidebarLeft />
        <SidebarRight />
      </div>
    </>
  )
}
