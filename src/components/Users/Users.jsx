import s from './Users.module.css';

const Users = (props) => {
  return <div> {
    props.users.map(u => <div key={u.id}>
      <div>
        <span>
          <img src={u.photoURl} alt="фото автара" className={s.userPhoto} />
        </span>
        <button type="button">FOLLOW</button>
      </div>

      <div>
        <span>{u.fullName}</span>
        <span>{u.status}</span>
      </div>
      <div>
        <span>{u.location.country}</span>
        <span>{u.location.city}</span>
      </div>

    </div>)
  }
  </div>
}

export default Users
