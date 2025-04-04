import React from 'react';
import Posts from './Posts/Posts';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div className={s.post}>
        New post
        <div>
          <textarea name="new-post" id="newpost" placeholder='new post'></textarea>
          <button>Add Poost</button>
        </div>
      </div>
      <Posts />
    </div>
  )
}

export default MyPosts;
