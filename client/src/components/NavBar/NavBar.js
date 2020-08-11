import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import "./NavBar.css";

const NavBar = () => {
	const [savedBooks, setSavedBooks] = useState([])

	useEffect(() => {
        loadBooks();
    }, [savedBooks])

    // Function to load saved books from db 
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setSavedBooks(res.data)
            )
            .catch(err => console.log(err));
    };

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
						Saved <span id="savedNum">{savedBooks.length}</span>
              		</Link>
				</NavItem>
			</Nav>
		</Navbar>
	)
}

export default NavBar;