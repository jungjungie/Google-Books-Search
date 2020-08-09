import React from "react";
import { Container, Button, Form, Input } from 'reactstrap';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <Container>
            <h2>Book Search</h2>

            <Form className="row">
                <Input type="text" name="booksearch" placeholder="Search by title or author" className="col-10 ml-sm-3 searchBox" />
                <Button className="justify-content-end align-items-end searchBtn">Search</Button>
            </Form>
        </Container>
    )
}

export default SearchBar;