import React from 'react'
import thumbs_up from '../../assets/emoji-gifs/thumbs_up.gif'
import growing_heart from '../../assets/emoji-gifs/growing_heart.gif'
import hugging_face from '../../assets/emoji-gifs/hugging_face.gif'
import face_with_tears_of_joy from '../../assets/emoji-gifs/face_with_tears_of_joy.gif'
import loudly_crying_face from '../../assets/emoji-gifs/loudly_crying_face.gif'
import exploding_head from '../../assets/emoji-gifs/exploding_head.gif'
import pouting_face from '../../assets/emoji-gifs/pouting_face.gif'
import './animated-emojis.css'

export default function AnimatedEmojis({ classAnimatedEmojiBar }) {
  return (
    <div className={classAnimatedEmojiBar}>
      <button className="emoji-btn-wrapper">
        <img className="filtered" src={thumbs_up} alt="thumbs up" />
      </button>
      <button className="emoji-btn-wrapper">
        <img className="filtered" src={growing_heart} alt="heart" />
      </button>
      <button className="emoji-btn-wrapper">
        <img className="filtered" src={hugging_face} alt="care" />
      </button>
      <button className="emoji-btn-wrapper">
        <img className="filtered" src={face_with_tears_of_joy} alt="haha" />
      </button>
      <button className="emoji-btn-wrapper">
        <img className="filtered" src={loudly_crying_face} alt="sad" />
      </button>
      <button className="emoji-btn-wrapper">
        <img className="filtered" src={exploding_head} alt="wow" />
      </button>
      <button className="emoji-btn-wrapper">
        <img className="filtered" src={pouting_face} alt="anger" />
      </button>
    </div>
  )
}
