import React from 'react';
import avatar from './profile.jpg';
import './profile.css';

const Profile = ({ user, isLoading, isLoggedIn }) => {
  console.log('user', user, 'isLoading', isLoading);
  return isLoading?
    <div>Loading...</div>
    :
    (
      isLoggedIn &&
      <div className="__profile">
        <div className="__profile_img">
          <img src={avatar} alt={user.email} width="200" />
        </div>
        <div className="__profile_info">
          <p>{ user.displayName }</p>
        </div>
      </div>
    )

}

export default Profile;
