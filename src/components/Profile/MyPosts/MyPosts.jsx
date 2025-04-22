import React from 'react';
import Post from './Posts/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />
  )

  return (
    <div className={s.container}>
      My Posts
      <div className={s.post}>
        New post
        <div className={s.public}>
          <textarea className={s.field} name="new-post" id="newpost" placeholder='new post'></textarea>
          <div className={s.actions}>
            <button className={s.button}>Add Post</button>
            <a className={s.link} href="#s">
              <img src="https://sun9-7.userapi.com/impg/fe3coAMSfPccUmjE1W7VMl1YLhCkTHiYWZyviQ/tvyvPBG0ndE.jpg?size=525x525&quality=96&sign=df8502fe2e0c16fc1f104146d5d276f8&type=album" alt="repost" />
            </a>
          </div>
        </div>
      </div>
      {postsElement}
    </div>
  )
}

export default MyPosts;
