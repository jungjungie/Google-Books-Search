import React from "react";
import NavBar from "../NavBar/NavBar";
import { Container } from 'reactstrap';
import "./Header.css";

const Header = () => {
    return (
        <header>
            <NavBar />
            <Container className="text-center">
                <section id="header-section">
                    <h1>Google Books Search</h1>
                    <h4>Search for and Save Books of Interest!</h4>
                </section>
            </Container>
        </header>
    )
}

export default Header;