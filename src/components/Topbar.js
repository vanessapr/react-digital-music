import React from 'react';

const Topbar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text">React Music</li>
        <li><a href="#">Two</a></li>
        <li><a href="#">Three</a></li>
      </ul>
    </div>
  </div>
);

export default Topbar;
