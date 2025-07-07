import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reduser';
import axios from 'axios';
import Preloader from './../common/Preloader';

class UsersContainer extends React.Component {

  componentDidMount() {

    axios.get(`https://jsonplaceholder.typicode.com/users?pages=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(true);
      this.props.setUsers(response.data);
      this.props.toggleIsFetching(false);
      // this.props.setTotalCount(response.data.totalCount); /**Для запроса на сервак "https://social-network.samuraijs.com/api/1.0/users" */
      // this.props.setUsers(response.data.item); /**Для запроса на сервак "https://social-network.samuraijs.com/api/1.0/users" */
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://jsonplaceholder.typicode.com/users?pages=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data);
      // this.props.setUsers(response.data.item); /**Для запроса на сервак "https://social-network.samuraijs.com/api/1.0/users" */
      // this.props.setTotalCount(response.data.totalCount); /**Для запроса на сервак "https://social-network.samuraijs.com/api/1.0/users" */
    })
  }


  render() {

    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);



