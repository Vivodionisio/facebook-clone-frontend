import React from 'react'
import CreatePost from './create-post/CreatePost'
import Post from './post/Post'
import './feed.scss'
import { PostData } from '../../assets/data/PostData'

export default function Feed() {
  return (
    <div className="Feed">
      <CreatePost />
      {PostData.map(post => {
        return <Post key={post.id} post={post} />
      })}
    </div>
  )
}
