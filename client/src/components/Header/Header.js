import React from "react";
import NavBar from "../NavBar/NavBar";
import { Container } from 'reactstrap';
import "./Header.css";

const Header = () => {
    return (
        <header>
            <NavBar />
            <Container className="text-center">
                <section id="header-section" className="shadow-sm">
                    <h1>
                        <span className="google-blue">G</span>
                        <span className="google-red">o</span>
                        <span className="google-yellow">o</span>
                        <span className="google-blue">g</span>
                        <span className="google-green">l</span>
                        <span className="google-red">e</span> 
                        <span className="google-blue"> Books Search</span>
                    </h1>
                    <h4>Search for and Save Books of Interest</h4>
                </section>
            </Container>
        </header>
    )
}

export default Header;