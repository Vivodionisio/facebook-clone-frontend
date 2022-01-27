import React from 'react'
import './sidebar.css'
import { sideIcons } from '../../buttons/sidebar-button'
import { sideIcons2 } from '../../buttons/sidebar-button'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

export default function SidebarLeft() {
  return (
    <>
      <div className="sidebar-container sidebar-left">
        <div className="section-1">
          {sideIcons.map(sideIcon => {
            return (
              <button key={sideIcon.name} className="btn">
                <sideIcon.icon className="icon" />
                <span className="name">{sideIcon.name}</span>
              </button>
            )
          })}
          <button className="btn btn-see-more">
            <KeyboardArrowDownRoundedIcon className="icon" />
            <span>See more</span>
          </button>
        </div>
        <div className="section-2">
          <h3>Your Shortcuts</h3>
          {sideIcons2.map(sideIcon => {
            return (
              <button key={sideIcon.iconName} className="btn">
                <sideIcon.icon className="icon"></sideIcon.icon>
                <span className="name">{sideIcon.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
