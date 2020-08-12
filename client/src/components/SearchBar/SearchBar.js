import React from "react";
import { Button, Form, Input } from 'reactstrap';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <section id="book-search" className="shadow-sm">
            <h2 className="section-titles">Book Search</h2>

            <Form className="row">
                <Input onChange={props.handleInputChange} type="text" name="booksearch" placeholder="Search by title" className="searchBox ml-3 col" value={props.searchInput} />
                <Button onClick={props.handleFormSubmit} className="searchBtn mr-3">Search</Button>
            </Form>
        </section>
    )
}

export default SearchBar;