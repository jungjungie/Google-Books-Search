import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Results from "../components/Results/Results";
import BookCardSearched from "../components/BookCard/BookCardSearched";
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
                console.log(res.data.items);

                const bookFields = res.data.items.map(item => {
                    // Sets thumbnail to an empty string if API has no thumbnail data
                    let thumbnail = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : "";

                    // console.log(thumbnail)

                    return {
                        key: item.id,
                        title: item.volumeInfo.title,
                        authors: item.volumeInfo.authors,
                        description: item.volumeInfo.description,
                        image: thumbnail,
                        link: item.volumeInfo.infoLink
                    }
                })

                // console.log(bookFields);

                setResults(bookFields)
            })
    }

    // Makes the API call to save a book to our db
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
                        <BookCardSearched
                            key={item.key}
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