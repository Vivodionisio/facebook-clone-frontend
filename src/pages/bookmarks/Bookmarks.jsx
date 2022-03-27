import React from 'react'
import '../home/home.css'
import './bookmarks.css'
import Topbar from '../../components/menu/topbar/Topbar'
import SidebarLeft from '../../components/menu/sidebar/SidebarLeft'

export default function Bookmarks() {
  return (
    <>
      <Topbar />
      <div className="content bookmarks">
        <SidebarLeft />
      </div>
    </>
  )
}
