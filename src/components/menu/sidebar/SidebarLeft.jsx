import React from 'react'
import './sidebar.css'
import { sideIcons } from '../../../assets/buttons/buttons'
import { sideIcons2 } from '../../../assets/buttons/buttons'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

export default function SidebarLeft() {
  return (
    <>
      <div className="sidebar-container sidebar-left">
        <div className="section-1">
          {sideIcons.map(sideIcon => {
            return (
              <button key={sideIcon.id} className="btn">
                <sideIcon.icon className="icon" />
                <span className="name side-bar-right-btn-name">
                  {sideIcon.name}
                </span>
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
              <button key={sideIcon.id} className="btn">
                <sideIcon.icon className="icon"></sideIcon.icon>
                <span className="name side-bar-right-btn-name">
                  {sideIcon.name}
                </span>
              </button>
            )
          })}
        </div>
        <div className="sidebar-bottom"></div>
      </div>
    </>
  )
}
