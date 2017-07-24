import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <h3 className="separator-center">Menu</h3>
    <ul className="vertical menu align-right">
      <li>
        <NavLink to="/profile">
          <i className="zmdi zmdi-edit zmdi-hc-lg"></i> Edit profile
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/">
        <i className="zmdi zmdi-equalizer zmdi-hc-lg"></i> Top Artists
        </NavLink>
      </li>
      <li>
        <NavLink to="/your_artists">
          <i className="zmdi zmdi-playlist-audio zmdi-hc-lg"></i> Your favorite artists
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
