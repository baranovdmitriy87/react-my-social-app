import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  return function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  };
}

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "aef5fcad-4f93-4d4a-bbec-5774f0a889ca"
  }
});

class ProfileContainer extends React.Component {
  componentDidMount() {


    let userId = this.props.router.params.userId || 2;

    instance.get(`/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
