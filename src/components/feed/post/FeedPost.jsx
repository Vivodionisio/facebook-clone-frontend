import React from 'react'
import './feed-post.css'
import PostHeader from './post-header/PostHeader'
import PostBody from './post-body/PostBody'
import PostEngagements from './post-engagements/PostEngagements'
import { PostData } from '../../../assets/data/PostData'

console.log(PostData)

export default function FeedPost() {
  return (
    <>
      {PostData.map(post => {
        return (
          <div key={post.id} className="card post-card">
            <PostHeader
              online={post.online}
              name={post.userName}
              date={post.date}
            />
            <PostBody desc={post.desc} image={post.photo} />
            <PostEngagements
              shares={post.shares}
              likes={post.likes}
              comments={post.comments}
            />
          </div>
        )
      })}
      <div className="bottom"></div>
    </>
  )
}
