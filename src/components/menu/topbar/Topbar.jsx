import React, { useState } from 'react'
import './topbar.css'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import CottageRoundedIcon from '@mui/icons-material/CottageRounded'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import FaceIcon from '@mui/icons-material/Face'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import GrainRoundedIcon from '@mui/icons-material/GrainRounded'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import PersonalVideoRoundedIcon from '@mui/icons-material/PersonalVideoRounded'

import { NavLink, useLocation } from 'react-router-dom'

export default function Topbar() {
  const location = useLocation()

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <button className="logo btn">
          <FacebookOutlinedIcon className="icon" />
        </button>
        <div className="search-fb-wrapper">
          <SearchOutlinedIcon className="icon" />
          <input className="search-fb-field" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="topbar-main">
        <NavLink
          to="/"
          className={({ isActive }) =>
            'btn btn-main' + (isActive ? ' main-activated' : '')
          }
        >
          {location.pathname === '/' ? (
            <CottageRoundedIcon />
          ) : (
            <CottageOutlinedIcon />
          )}
        </NavLink>

        <NavLink
          to="/video"
          className={({ isActive }) =>
            'btn btn-main' + (isActive ? ' main-activated' : '')
          }
        >
          {location.pathname === '/' ? (
            <PersonalVideoRoundedIcon />
          ) : (
            <OndemandVideoOutlinedIcon />
          )}
        </NavLink>
        <NavLink to="/store" className="btn btn-main">
          <StorefrontOutlinedIcon />
        </NavLink>
        <NavLink to="/groups" className="btn btn-main">
          <GroupsOutlinedIcon />
        </NavLink>
        <NavLink to="/gaming" className="btn btn-main">
          <SportsEsportsOutlinedIcon />
        </NavLink>
        <button
          // onClick={() =>
          //   setDisplay(prevDisplay => {
          //     return prevDisplay === 'none' ? 'block' : 'none'
          //   })
          // }
          className="btn btn-main"
        >
          <MenuRoundedIcon />
        </button>
      </div>

      <div className="topbar-right">
        <NavLink
          to="/profile/:userName"
          className={({ isActive }) =>
            'btn btn-user-page' + (isActive ? ' profile-activated' : '')
          }
        >
          <FaceIcon className="icon" />
          <span>Jacamo</span>
        </NavLink>
        <button className="btn btn-round">
          <GrainRoundedIcon className="icon" />
        </button>
        <button className="btn btn-round">
          <ChatBubbleIcon className="icon" />
        </button>
        <button className="btn btn-round">
          <NotificationsIcon className="icon" />
        </button>
        <button className="btn btn-round">
          <ArrowDropDownRoundedIcon className="icon" />
        </button>
      </div>
    </div>
  )
}

Topbar.defaultProps = {
  mainActivated: false
}
