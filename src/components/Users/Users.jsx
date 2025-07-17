import style from './Users.module.css';
import userPhoto from '../../assets/images/default-user.webp';
import { NavLink } from 'react-router-dom';


const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let maxVisiblePages = 12;
  let visiblePages = Math.min(pagesCount, maxVisiblePages)

  let pages = [];
  for (let i = 1; i <= visiblePages; i++) {
    pages.push(i)
  }

  return <div className={style.usersContainer}>
    <div className={style.pagination}>
      {pages.map(p => {
        return <span className={props.currentPage === p && style.selectedPage}
          onClick={() => { props.onPageChanged(p) }}>{p}</span>
      })}
    </div>
    {

      props.users.map(u => <div key={u.id}>
        <div className={style.userWrapper}>
          <div>
            <NavLink to={'/profile'}>
              <img
                src={u.photos?.small || userPhoto}
                alt={`${u.name}'s avatar`}
                className={style.userPhoto} />
            </NavLink>

            <div> {
              u.followed
                ? <button className={style.buttonFollowed} onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button>
                : <button className={style.buttonFollowed} onClick={() => { props.follow(u.id) }}>FOLLOW</button>
            }
            </div>
          </div>

          <div className={style.userInfo}>
            <div className={style.userStatus}>
              <span>{u.name}</span>
              <span>{u.email}</span>
            </div>

            <div className={style.userLocation}>
              {/* <span>{u.address.street}</span>
              <span>{u.address.city}</span> */}
            </div>
          </div>
        </div>

        <div>
        </div>
      </div>
      )
    }
  </div>
}

export default Users;

