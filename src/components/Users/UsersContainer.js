import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC } from '../../redux/users-reduser';
import axios from 'axios';

class UsersContainer extends React.Component {

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

    return <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      users={this.props.users}
      onPageChanged={this.onPageChanged}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    // setTotalCount: (totalUsersCount) => {
    //   dispatch(setTotalCountAC(totalUsersCount));
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



