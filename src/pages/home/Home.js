import React from 'react'
import './home.css'
import Topbar from '../../components/menu/topbar/Topbar'
import SidebarLeft from '../../components/menu/sidebar/SidebarLeft'
import SidebarRight from '../../components/menu/sidebar/SidebarRight'
import Feed from '../../components/feed/Feed'

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="main-content">
        <SidebarLeft />
        <Feed />
        <SidebarRight />
      </div>
    </>
  )
}
