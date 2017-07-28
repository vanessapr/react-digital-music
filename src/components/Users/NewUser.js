import React from 'react';
import { Loading, Message } from '../Helpers';
import FormUser from './FormUser';

const NewUser = ({ isLoading, errorMessage, addUser }) => (
  <div>
    <h2 className="margin-bottom-1">
      Users <small>New</small>
    </h2>
    { isLoading && <Loading height="100%" /> }
    {
      errorMessage &&
        <Message type="alert" title="Error!">
          <p>{ errorMessage }</p>
        </Message>
    }
    <FormUser
      onSaveUser={addUser} />
  </div>
);

export default NewUser;
