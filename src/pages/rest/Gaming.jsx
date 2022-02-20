import React from 'react'
import '../home/home.css'
import Topbar from '../../components/menu/topbar/Topbar'
import NoPlace from '../../components/shared/NoPlace'

export default function Gaming() {
  return (
    <>
      <div className="topbar-fixed">
        <Topbar />
        <NoPlace />
      </div>
    </>
  )
}
