import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <>
      <div className="navig-container">
        <div className="logo-header">
          <h1 className="title">Covid cases</h1>
        </div>
        <ul>
          <li className={splitLocation[1] === '' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={splitLocation[1] === 'mission' ? 'active' : ''}>
            <Link to="/detail">Details</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Nav;
