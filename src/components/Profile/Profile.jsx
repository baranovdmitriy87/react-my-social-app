import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';


const Profile = (props) => {

  return (
    <div className={style.profile}>
      <img
        src="https://avatars.mds.yandex.net/i?id=bd172841fc20b1aabb3ca214a1fcb7e5be0048a7-10467522-images-thumbs&n=13"
        alt="Обложка"
        className={style.photo}
      />
      <ProfileInfo profile = {props.profile} />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;
