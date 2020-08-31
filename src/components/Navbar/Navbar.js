import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { VscMenu, VscFoldUp } from 'react-icons/vsc';

import { NavbarData } from './NavbarData';
import './Navbar.scss';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => setToggle(!toggle);

  return (
    <div>
      <button
        onMouseLeave={toggleMenu}
        onMouseOver={toggleMenu}
        className="toggle-btn"
      >
        {toggle ? <VscFoldUp /> : <VscMenu />}
      </button>
      <nav className={toggle ? 'nav-open' : 'nav-close'}>
        <ul onMouseLeave={toggleMenu}>
          {NavbarData.map((item, idx) => (
            <li key={idx} className={item.className}>
              <Link to={item.path}>
                <span className="icon">{item.icon}</span>
                <span className="title">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
