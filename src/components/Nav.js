import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <>
    <div className="navig-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/detail">Details</Link>
        </li>
      </ul>
    </div>
  </>
);
export default Nav;
