import React from 'react'
import PostHeader from './post-header/PostHeader'
import PostBody from './post-body/PostBody'
import PostEngagements from './post-engagements/PostEngagements'
import './post.css'

export default function Post() {
  return (
    <>
      <div className="card post-card">
        <PostHeader />
        <PostBody />
        <PostEngagements />
      </div>
    </>
  )
}
