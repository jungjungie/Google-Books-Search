import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Results from "../components/Results/Results";
import BookCard from "../components/BookCard/BookCard";
import API from "../utils/API";

const SearchPage = () => {
    // Setting initial state of search input
    const [search, setSearch] = useState("")

    // Setting initial state of search results
    const [results, setResults] = useState([])

    // Captures input from searchbar
    const handleInputChange = event => {
        // console.log(event.target.value)
        setSearch(event.target.value)
    }

    // Retrieves search results from Google Books API upon clicking "Search" button
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

                setResults(bookFields)
            })
    }

    const saveBook = (event) => {
        event.preventDefault();

        // console.log(event.target)

        let newBook = {
            title: event.target.dataset.title,
            authors: event.target.dataset.authors,
            description: event.target.dataset.description,
            image: event.target.dataset.image,
            link: event.target.dataset.link
        }

        console.log(newBook)

        API.saveBook(newBook)
            .then(res =>
                console.log(res)
            )
            .catch(err => console.log(err));;
    }

    return (
        <>
            <SearchBar
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />

            {/* Results component will show only if results.length is not empty */}
            {results.length ? (
                <Results>
                    {results.map((item) =>
                        <BookCard
                            id={item.key}
                            title={item.title}
                            authors={item.authors.join(", ")}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            saveBook={saveBook}
                        />
                    )}
                </Results>
            ) : (
                    <p></p>
                )}
        </>
    )
}

export default SearchPage;