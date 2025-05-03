import React from 'react';
import Post from './Posts/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  const postsElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)

  const newPostElement = React.createRef();

  const addPost = () => {
    // debugger
    // let text = newPostElement.current.value;
    // props.addPost(text);
    props.dispatch({ type: 'ADD-POST' });

  }

  const onPostChange = () => {

    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  }

  return (
    <div className={s.container}>
      <h3>My Posts</h3>
      <div className={s.post}>
        <div className={s.public}>
          <textarea className={s.field}
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
            name="new-post"
            id="newPost"
            placeholder='new post' />
          <div className={s.actions}>
            <button className={s.button} onClick={addPost}>Отправить</button>
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
