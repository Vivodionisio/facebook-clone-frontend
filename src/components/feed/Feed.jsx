import React from 'react'
import CreatePost from './create-post/CreatePost'
import Post from './post/Post'
import './feed.css'

export default function Posts() {
  return (
    <div className="feed-container">
      <CreatePost />
      <Post />
      <Post />
    </div>
  )
}
