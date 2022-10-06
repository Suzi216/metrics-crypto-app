import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <>
    <div className="navig-container">
      <ul className="home-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/detail"> </Link>
        </li>
      </ul>
    </div>
  </>
);
export default Nav;
