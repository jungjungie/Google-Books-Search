import React from "react";
import BookCard from "../BookCard/BookCard";

const Results = props => {
    return (
        <section id="results">
            <h2 className="section-titles">Results</h2> 

            {props.children}
        </section>
    )
}

export default Results;