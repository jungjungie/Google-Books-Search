import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks/SavedBooks";
import BookCardSaved from "../components/BookCard/BookCardSaved";

const SavedPage = () => {
    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => {
        loadBooks();
    }, [])

    // Function to load saved books from db 
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setSavedBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Makes the API call to delete a book from our db
    const deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <>
            {savedBooks.length ? (
                <SavedBooks>
                    {savedBooks.map((item) =>
                        <BookCardSaved
                            id={item._id}
                            key={item._id}
                            title={item.title}
                            authors={item.authors}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            deleteBook={deleteBook}
                        />
                    )}
                </SavedBooks>
            ) : (
                    <h2 className="section-titles">No Books Saved</h2>
                )}
        </>
    )
}

export default SavedPage;