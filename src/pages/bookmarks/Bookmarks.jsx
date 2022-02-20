import React from 'react'
import '../home/home.css'
import './bookmarks.css'
import Topbar from '../../components/menu/topbar/Topbar'
import SidebarLeft from '../../components/menu/sidebar/SidebarLeft'

export default function Bookmarks() {
  return (
    <>
      <div className="topbar-fixed">
        <Topbar />
        <div className="body-container bookmarks">
          <SidebarLeft />
        </div>
      </div>
    </>
  )
}
