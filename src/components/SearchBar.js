import React, { useState } from "react";
const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        onTermSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;