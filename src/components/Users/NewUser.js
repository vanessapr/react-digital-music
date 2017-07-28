import React from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import FormUser from './FormUser';

const NewUser = ({ isLoading, addUser }) => (
  <div>
    <h2 className="margin-bottom-1">
      Users <small>New</small>
    </h2>
    <BlockUi tag="div" blocking={isLoading}>
      <FormUser
        onSaveUser={addUser} />
    </BlockUi>
  </div>
);

export default NewUser;
