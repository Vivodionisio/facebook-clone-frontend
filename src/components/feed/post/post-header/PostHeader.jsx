import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import './post-header.css'

export default function PostHeader() {
  return (
    <div className="card-header wrapper">
      <AccountCircleIcon className="icon" />
      <div className="post-details">
        <p>
          <a className="user-name" href="#">
            Jeromy Berisford
          </a>
        </p>
        <div className="minutiae-wrapper">
          <a href="#">5 h</a>
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
