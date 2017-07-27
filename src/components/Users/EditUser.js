import React, { Component } from 'react';
import { Loading, Message } from '../Helpers';
import FormUser from './FormUser';

class EditUser extends Component {
  componentDidMount() {
    const { getUserById, match: { params: { id } }, location: { pathname }, uid } = this.props;
    let userId = pathname === '/profile'? uid : id;
    getUserById(userId);
  }

  render() {
    const { user, isLoading, errorMessage, saveProfile, location: { pathname }, options: { title, location } } = this.props;

    return (
      isLoading?
        <Loading height="100%" />
      :
      (
        <div>
          <h2 className="margin-bottom-1">{ title }</h2>
          {
            errorMessage?
              <Message type="alert" title="Error!">
                <p>{ errorMessage }</p>
              </Message>
              :
              <FormUser
                data={user}
                urlCancel={location}
                onSaveUser={saveProfile}
                disabled={pathname === '/profile'? false : true}
              />
          }
        </div>
      )
    );
  }
}

EditUser.defaultProps = {
  options: {
    title: 'Profile',
    location: '/'
  }
};

export default EditUser;
