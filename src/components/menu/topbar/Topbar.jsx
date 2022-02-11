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
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone'

import { NavLink } from 'react-router-dom'

export default function Topbar() {
  const activeArr = [
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false }
  ]

  const handleClickMain = e => {
    const id =
      parseInt(e.target.id) || parseInt(e.target.closest('.btn-main').id)
    const found = activeArr.find(a => a.id === id)
    const inactive = activeArr.filter(ia => ia.id !== id)

    inactive.forEach(a => {
      a.active = false
      console.log(a.active)
    })
    if (found) {
      found.active = true
      console.log(activeArr)
      console.log(found.active)
      console.log(activeArr[0].active) // returns true
    }
  }

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
          id={1}
          onClick={e => handleClickMain(e)}
        >
          {activeArr[0].active ? (
            <CottageOutlinedIcon />
          ) : (
            <CottageRoundedIcon />
          )}
        </NavLink>

        <NavLink
          to="/video"
          className={({ isActive }) =>
            'btn btn-main' + (isActive ? ' main-activated' : '')
          }
          id={1}
          onClick={e => handleClickMain(e)}
        >
          {/* {activeArr.id === 1 && activeArr.active ? (
            <OndemandVideoTwoToneIcon />
          ) : (
            <OndemandVideoOutlinedIcon />
          )} */}
          <OndemandVideoOutlinedIcon />
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
          onClick={e => handleClickMain(e)}
          id={5}
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
