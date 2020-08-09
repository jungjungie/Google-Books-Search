import React, { useState, useEffect } from "react";
import { Button, Form, Input } from 'reactstrap';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <section id="book-search">
            <h2 className="section-titles">Book Search</h2>

            <Form className="row">
                <Input onChange={props.handleInputChange} type="text" name="booksearch" placeholder="Search by title or author" className="col-10 ml-sm-3 searchBox" />
                <Button onClick={props.handleFormSubmit} className="justify-content-end align-items-end searchBtn">Search</Button>
            </Form>
        </section>
    )
}

export default SearchBar;