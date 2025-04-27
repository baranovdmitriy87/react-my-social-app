import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <img
        src="https://avatars.mds.yandex.net/i?id=bd172841fc20b1aabb3ca214a1fcb7e5be0048a7-10467522-images-thumbs&n=13"
        alt="Обложка"
        className={s.photo}
      />
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText} />
    </div>
  );
};

export default Profile;
