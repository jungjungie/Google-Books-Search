import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar expand="xs" className="fixed-top shadow-sm border-bottom">
        <NavbarBrand href="/" className="mr-auto">Google Books</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Saved</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    )
}

export default NavBar;