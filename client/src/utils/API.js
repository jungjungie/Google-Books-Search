import axios from "axios";

export default {
    // Gets the book with the searched title from Google Books API
    getBook: function (book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
    },

    // Gets all saved books from our database
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Saves a book to our database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
};
