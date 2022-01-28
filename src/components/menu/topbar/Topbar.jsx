import React from 'react'
import './topbar.css'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import FaceIcon from '@mui/icons-material/Face'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import GrainRoundedIcon from '@mui/icons-material/GrainRounded'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

export default function Topbar() {
  console.log('hello')
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
        <button className="btn btn-main">
          <CottageOutlinedIcon />
        </button>
        <button className="btn btn-main">
          <OndemandVideoOutlinedIcon />
        </button>
        <button className="btn btn-main">
          <StorefrontOutlinedIcon />
        </button>
        <button className="btn btn-main">
          <GroupsOutlinedIcon />
        </button>
        <button className="btn btn-main">
          <SportsEsportsOutlinedIcon />
        </button>
        <button className="btn btn-main">
          <MenuRoundedIcon />
        </button>
      </div>

      <div className="topbar-right">
        <button className="btn btn-user-page">
          <FaceIcon className="icon" />
          <span>Jacamo</span>
        </button>

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
