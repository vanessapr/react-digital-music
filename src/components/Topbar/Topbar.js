import React from 'react';
import { withRouter } from 'react-router-dom';

const Topbar = ({ signOut, isLoggedIn, history }) => (
  <div className="top-bar margin-bottom-2">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text">React Music</li>
        <li><a href="#">Two</a></li>
        <li><a href="#">Three</a></li>
      </ul>
    </div>
    <div className="top-bar-right">
      {
        isLoggedIn?
          <ul className="menu">
            <li><a href="#" onClick={ e => {
              e.preventDefault();
              signOut(history);
            } }>Logout</a></li>
          </ul>
        :
          null
      }
    </div>
  </div>
);

export default withRouter(Topbar);
