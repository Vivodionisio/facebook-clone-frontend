import React from 'react'
import './sidebar.scss'
import { sideIcons } from '../../../assets/buttons/buttons'
import { sideIcons2 } from '../../../assets/buttons/buttons'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { Link } from 'react-router-dom'

export default function SidebarLeft() {
  return (
    <>
      <div className="Sidebar left">
        <div className="section-1">
          {sideIcons.map(sideIcon => {
            if (sideIcon.id === 1) {
              return (
                <Link
                  to="/profile/:userName"
                  key={sideIcon.id}
                  className="btn bookmark-user"
                >
                  <div className="container">
                    <sideIcon.icon className="icon" />
                  </div>
                  <span className="name side-bar-right-btn-name">
                    {sideIcon.name}
                  </span>
                </Link>
              )
            } else {
              return (
                <button key={sideIcon.id} className="btn">
                  <div className="container">
                    <sideIcon.icon className="icon" />
                  </div>
                  <span className="name side-bar-right-btn-name">
                    {sideIcon.name}
                  </span>
                </button>
              )
            }
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
                <div className="sidebar-left-icon-container">
                  <sideIcon.icon className="icon"></sideIcon.icon>
                </div>
                <span className="name">{sideIcon.name}</span>
              </button>
            )
          })}
        </div>
        <div className="bottom"></div>
      </div>
    </>
  )
}
