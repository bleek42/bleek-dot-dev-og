import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavbarData } from './NavbarData';

import './Navbar.scss';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => setToggle(!toggle);

  return (
    <div>
      <button className="toggle-btn" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
      <nav className={toggle ? 'nav-open' : 'nav-close'}>
        <ul>
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
