import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="xs" className="fixed-top shadow-sm border-bottom">
      <NavbarBrand href="/" className="mr-auto">Google Books</NavbarBrand>
      <Nav navbar>
        <NavItem>
          <Link to="/search" className="nav-link">
            Search
              </Link>
        </NavItem>
        <NavItem>
          <Link to="/saved" className="nav-link">
            Saved
              </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar;