import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks/SavedBooks";
import BookCard from "../components/BookCard/BookCard";

const SavedPage = () => {
    const [savedBooks, setSavedBooks] = useState([])
    // const [savedPg, setSavedPg] = useState(false)

    useEffect(() => {
        loadBooks();
        // setSavedPg(true);
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
        <SavedBooks>
             {savedBooks.map((item) =>
                        <BookCard
                            id={item.key}
                            title={item.title}
                            authors={item.authors}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                        />
                    )}
        </SavedBooks>
    )
}

export default SavedPage;