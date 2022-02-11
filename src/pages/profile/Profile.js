import React from 'react'
import '../home/home.css'
import './profile.css'
import Topbar from '../../components/menu/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import CoverPhoto from '../../assets/images/cover-photo.png'
import ProfilePicLarge from '../../assets/images/profile-pic-lg.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import WorkIcon from '@mui/icons-material/Work'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded'

export default function Profile() {
  return (
    <>
      <div className="topbar-fixed">
        <Topbar />
      </div>
      <div className="profile body-container">
        <div className="profile-header-section">
          <img className="cover-photo" src={CoverPhoto} alt="cover-album-art" />

          <div className="header-info-container">
            <img
              className="profile-pic"
              src={ProfilePicLarge}
              alt="profile-pic"
            ></img>
            <div className="name-and-friends-container">
              <h1>Jacamo</h1>
              <h4>Untold Friends</h4>
              <div className="friends-shortlist-container">
                <AccountCircleIcon className="friends-icon" />
                <AccountCircleIcon className="friends-icon" />
                <AccountCircleIcon className="friends-icon" />
                <AccountCircleIcon className="friends-icon" />
                <AccountCircleIcon className="friends-icon" />
              </div>
            </div>
            <div className="info-btn-container">
              <button className="btn add-story btn-basic">Add Story</button>
              <button className="btn edit-profile btn-basic">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="nav-outer-container">
          <div className="nav-container">
            <div className="nav-btn-container">
              <button className="btn nav-btn btn-main">Posts</button>
              <button className="btn nav-btn btn-main">About</button>
              <button className="btn nav-btn btn-main">Friends</button>
              <button className="btn nav-btn btn-main">Photos</button>
            </div>
            <MoreHorizRoundedIcon className="btn more" />
          </div>
        </div>

        {/*  */}
        <div className="content-container">
          <div className="container-a">
            <div className="card intro-friends-photos-container">
              <div className="intro-container">
                <h2>Intro</h2>
                <div className="details-list">
                  <div className="details-list-item">
                    <WorkIcon className="icon" />
                    <p>
                      Workss at <span>Island Records</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <SchoolRoundedIcon className="icon" />
                    <p>
                      Studied at <span>ACM</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="card intro-friends-photos-container">
              <div className="intro-container">
                <h2>Intro</h2>
                <div className="details-list">
                  <div className="details-list-item">
                    <WorkIcon className="icon" />
                    <p>
                      Workss at <span>Island Records</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <SchoolRoundedIcon className="icon" />
                    <p>
                      Studied at <span>ACM</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                  <div className="details-list-item">
                    <OtherHousesRoundedIcon className="icon" />
                    <p>
                      Lives in <span>Little Weston</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="facebook-clone-blurb">This is a facebook clone</p>
          </div>
          {/*  */}
          <div className="profile-wall-container">
            <Feed />
          </div>
        </div>
      </div>
    </>
  )
}
