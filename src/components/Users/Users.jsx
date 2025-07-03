import style from './Users.module.css';


const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
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
            <img
              src={u.photoUrl || `https://i.pravatar.cc/150?u=${u.id}`}
              alt="фото автара"
              className={style.userPhoto} />
            <div> {
              u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button>
                : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>
            }
            </div>
          </div>

          <div className={style.userInfo}>
            <div className={style.userStatus}>
              <span>{u.name}</span>
              <span>{u.email}</span>
            </div>

            <div className={style.userLocation}>
              <span>{u.address.street}</span>
              <span>{u.address.city}</span>
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

