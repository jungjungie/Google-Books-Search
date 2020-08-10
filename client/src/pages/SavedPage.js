import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks/SavedBooks";

const SavedPage = () => {
    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => {
        loadBooks()
      }, [])

    // Function to load saved books from db 
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setSavedBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <>
        <SavedBooks />
        {savedBooks.map(book => (
                  <p>{book.title}</p>
                ))}
        </>
    )
}

export default SavedPage;