import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light"> 
      <Link className="navbar-brand" to='/'>
          Aircnc
      </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active"> 
          <Link className="nav-link pr-4 pl-4" to="/">Host your home</Link>
        </li> 
        <li className="nav-item"> 
          <Link className="nav-link pr-4 pl-4" to="/experiance">Host your experiance</Link>
        </li> 
        <li className="nav-item"> 
          <Link className="nav-link pr-4 pl-4" to="/help">Help</Link>
        </li> 
        <li className="nav-item"> 
          <Link className="nav-link pr-4 pl-4" to="/login">Log in</Link>
        </li> 
        <li className="nav-item"> 
          <Link className="nav-link pr-4 pl-4 signupBtn" to="/signup">Sign up</Link>
        </li> 
      </ul>
    </div>
  </nav>
    );
};

export default Nav;