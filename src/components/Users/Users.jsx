import style from './Users.module.css';
import React from 'react';
import axios from 'axios';

class Users extends React.Component {

  componentDidMount() {

    axios.get(`https://jsonplaceholder.typicode.com/users?pages=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data);
      // this.props.setTotalCount(response.data.totalCount); /**Для запроса на сервак "https://social-network.samuraijs.com/api/1.0/users" */
      // this.props.setUsers(response.data.item); /**Для запроса на сервак "https://social-network.samuraijs.com/api/1.0/users" */
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://jsonplaceholder.typicode.com/users?pages=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data);
      // this.props.setUsers(response.data.item); /**Для запроса на сервак "https://social-network.samuraijs.com/api/1.0/users" */
    })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return <div className={style.usersContainer}>
      <div className={style.pagination}>

        {pages.map(p => {
          return <span className={this.props.currentPage === p && style.selectedPage}
            onClick={() => { this.onPageChanged(p) }}>{p}</span>
        })}
      </div>
      {
        this.props.users.map(u => <div key={u.id}>

          <div className={style.userWrapper}>
            <div>
              <img
                src={u.photoUrl || `https://i.pravatar.cc/150?u=${u.id}`}
                alt="фото автара"
                className={style.userPhoto} />
              <div> {
                u.followed
                  ? <button onClick={() => { this.props.unfollow(u.id) }}>UNFOLLOW</button>
                  : <button onClick={() => { this.props.follow(u.id) }}>FOLLOW</button>
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

          {/* <button>SHOW MORE</button> */}
        </div>
        )
      }
    </div>
  }
}
export default Users;

