import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <h3 className="separator-right">Menu</h3>
    <ul className="vertical menu align-right">
      <li>
        <NavLink exact to="/" activeClassName="active">
        <i className="zmdi zmdi-equalizer zmdi-hc-lg"></i> Top Artists
        </NavLink>
      </li>
      <li>
        <NavLink to="/your_artists" activeClassName="active">
          <i className="zmdi zmdi-playlist-audio zmdi-hc-lg"></i> Your favorite artists
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" activeClassName="active">
          <i className="zmdi zmdi-accounts-alt zmdi-hc-fw"></i> Users
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
