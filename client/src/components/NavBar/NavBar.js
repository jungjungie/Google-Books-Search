import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
    return (
        <Navbar color="faded" light expand="xs">
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