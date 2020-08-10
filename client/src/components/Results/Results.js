import React from "react";

const Results = props => {
    return (
        <section id="results">
            <h2 className="section-titles">Results</h2> 

            {props.children}
        </section>
    )
}

export default Results;