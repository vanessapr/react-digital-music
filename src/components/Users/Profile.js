import React from 'react';

const Profile = ({ user, isLoading, isLoggedIn }) => {
  console.log('user', user, 'isLoading', isLoading);
  return isLoading?
    <div>Loading...</div>
    :
    (
      isLoggedIn?
      <div>
        <h2>Profile</h2>
        { user.email }
        { user.displayName }
        { user.photoURL }
      </div>
      :
      null
    )

}

export default Profile;
