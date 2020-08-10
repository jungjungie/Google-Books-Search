import React from "react";

const SavedBooks = props => {
    return (
        <section id="saved-books" className="shadow-sm">
            <h2 className="section-titles">Saved Books</h2>

            {props.children} 
        </section>
    )
}

export default SavedBooks;