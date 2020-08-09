import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Results from "../components/Results/Results";
import API from "../utils/API";

const SearchPage = () => {
    // Setting initial state of search input
    const [search, setSearch] = useState()

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

    return (
        <>
            <SearchBar
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            {results.map((item) => <p>{item.title}</p>)}
            <Results />
        </>
    )
}

export default SearchPage;