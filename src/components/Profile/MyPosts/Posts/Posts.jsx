import React from 'react';
import s from './Posts.module.css';

const Posts = () => {
  return (
    <div className={s.posts}>
      <div className={s.item}>
        post1
      </div>
      <div className={s.item}>
        post2
      </div>
      <div className={s.item}>
        post3
      </div>
    </div>
  )
}

export default Posts
