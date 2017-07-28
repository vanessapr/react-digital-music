import React, { Component } from 'react';
import { Loading } from '../Helpers';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import FormUser from './FormUser';

class EditUser extends Component {
  componentDidMount() {
    const { getUserById, match: { params: { id } }, location: { pathname }, uid } = this.props;
    let userId = pathname === '/profile'? uid : id;
    getUserById(userId);
  }

  render() {
    const { user, isLoading, editIsLoading, updateUser, location: { pathname } } = this.props;

    return (
      <div>
        {
          pathname !== '/profile'?
          <h2 className="margin-bottom-1">
            Users <small>Edit</small>
          </h2>
          :
          <h2 className="margin-bottom-1">
            Profile
          </h2>
        }
        {
          isLoading? <Loading height="100%" />
          :
          <BlockUi tag="div" blocking={editIsLoading}>
            <FormUser
              data={user}
              currentUrl={pathname}
              onSaveUser={updateUser}
            />
          </BlockUi>
        }
      </div>
    );
  }
}

export default EditUser;
