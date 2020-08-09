import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Button, Form, Input } from 'reactstrap';
import './SearchBar.css';

const SearchBar = () => {
    // Setting initial state of books
    const [search, setSearch] = useState()

    const [books, setBooks] = useState([])

    const handleInputChange = event => {
        // console.log(event.target.value)
        setSearch(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        // console.log(search);

        API.getBook(search)
            .then(res => {
                // console.log(res.data.items);

                const bookFields = res.data.items.map(item => {
                    return {
                        key: item.id,
                        title: item.volumeInfo.title,
                        authors: item.volumeInfo.authors,
                        description: item.volumeInfo.description,
                        image: item.volumeInfo.imageLinks.thumbnail,
                        link: item.volumeInfo.infoLink
                    }
                })

                console.log(bookFields);

                setBooks(bookFields)
            })
    }

    return (
        <section id="book-search">
            <h2 className="section-titles">Book Search</h2>

            {books.map((item) => <p>{item.title}</p>)}
            <Form className="row">
                <Input onChange={handleInputChange} type="text" name="booksearch" placeholder="Search by title or author" className="col-10 ml-sm-3 searchBox" />
                <Button onClick={handleFormSubmit} className="justify-content-end align-items-end searchBtn">Search</Button>
            </Form>
        </section>
    )
}

export default SearchBar;