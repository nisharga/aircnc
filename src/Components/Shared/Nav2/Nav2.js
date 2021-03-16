import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../Nav/nav.css';
 
const Nav2 = ({divison, date, totalguest}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light"> 
      <Link className="navbar-brand" to='/'>
          Aircnc
      </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">'
         <li className="nav-item active division"> 
          <Link className="nav-link pr-4 pl-4 " to="/">
              {divison} Divison
            </Link>
        </li> 
        <li className="nav-item date"> 
          <Link className="nav-link pr-4 pl-4 " to="/">
           {date}
          </Link>
        </li> 
        <li className="nav-item guests"> 
          <Link className="nav-link pr-4 pl-4 " to="/">
           {totalguest} Guests
          </Link>
        </li> 
        <li className="nav-item marginRight search"> 
          <Link className="nav-link pr-4 pl-4" to="/">
            <FaSearch />
          </Link>
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

export default Nav2;