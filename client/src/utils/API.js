import axios from "axios";

export default {
    // Gets the book with the searched title
    getBook: function (book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
    },

    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
