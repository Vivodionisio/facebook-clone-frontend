import React from 'react'
import './topbar.css'
import FaceIcon from '@mui/icons-material/Face'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import GrainRoundedIcon from '@mui/icons-material/GrainRounded'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import {
  HomeFilled,
  HomeOutline,
  WatchFilled,
  WatchOutline,
  GroupsFilled,
  GroupsOutline,
  StoreFilled,
  StoreOutline,
  GamingFilled,
  GamingOutline
} from '../../../assets/images/nav-link-svgs/nav-link-svgs'
// import HomeFilled from '../../../assets/images/nav-link-svgs/home-filled'
import { NavLink, useLocation } from 'react-router-dom'

const navLinkIcons = new Map([
  ['/', [HomeFilled, HomeOutline]],
  ['/video', [WatchFilled, WatchOutline]],
  ['/store', [StoreFilled, StoreOutline]],
  ['/groups', [GroupsFilled, GroupsOutline]],
  ['/gaming', [GamingFilled, GamingOutline]],
  ['/bookmarks', [MenuRoundedIcon, MenuRoundedIcon]]
])

export default function Topbar() {
  const location = useLocation()

  function MyNavLink({ children, to, ...props }) {
    const icons = navLinkIcons.get(to),
      RoundedIcon = icons[0],
      OutlinedIcon = icons[1]
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          'btn btn-main' + (isActive ? ' main-activated' : '')
        }
        {...props}
      >
        {location.pathname === to ? <RoundedIcon /> : <OutlinedIcon />}
      </NavLink>
    )
  }

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <NavLink className="logo btn" to="/">
          <FacebookOutlinedIcon className="icon" />
        </NavLink>
        <div className="search-fb-wrapper">
          <SearchOutlinedIcon className="icon" />
          <input className="search-fb-field" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="topbar-main">
        <MyNavLink to="/" />
        <MyNavLink to="/video" />
        <MyNavLink to="/store" />
        <MyNavLink to="/groups" />
        <MyNavLink to="/gaming" />
        <MyNavLink to="/bookmarks" />
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

// Topbar.defaultProps = {
//   mainActivated: false
// }
