import React from 'react';
import { Link } from 'react-router-dom';
import avatar from './profile.jpg';
import './Profile.css';

const Profile = ({ user }) => {
  return (
      !!user &&
      <div className="profile">
        <div className="profile-img">
          <img src={avatar} alt={user.email} width="200" />
        </div>
        <div className="profile-info text-center">
          <h6><Link to="/profile">{ user.fullName }</Link></h6>
          <p>{ user.email }</p>
        </div>
      </div>
    )

}

export default Profile;
