import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink } from 'reactstrap';

const Header = ({ authenticated }) => (
  <div>
    <header className="list-books-title">
      <h1>Great Library d'Austin</h1>
      <Nav pills className="connection">
        <NavLink href="#" className="nav-color">About Us</NavLink>
        <NavLink href="#" className="nav-color">Contact</NavLink>
        <div className="nav-link">
          {authenticated
            ?
            <input className="pt-input" placeholder="Wellcome..." type="text" />
            :
            <div>
              <Link className="nav-color" to="/Login">Register/Login</Link>
            </div>
          }
        </div>
      </Nav>
    </header>
  </div>
);
export default Header;

