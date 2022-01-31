import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import './post-header.css'

export default function PostHeader({ name, date, online }) {
  return (
    <div className="card-header wrapper post">
      <AccountCircleIcon className="icon" />
      {online && <div className="online"></div>}
      <div className="post-details">
        <p>
          <a className="user-name" href="#">
            {name}
          </a>
        </p>
        <div className="minutiae-wrapper">
          <a href="#">{date}</a>
          <span>&middot;</span>
          <PeopleAltIcon className="friends-icon-small" />
        </div>
      </div>
      <div className="options-wrapper">
        <button className="options-btn btn">
          <MoreHorizRoundedIcon className="options-icon" />
        </button>
      </div>
    </div>
  )
}
