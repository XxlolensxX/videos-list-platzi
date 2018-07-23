import React from 'react';
import './search.css';

const Search = (props) => (
    <form
    className="Search"
    onSubmit={props.handleSubmit}
    >
        <input
        ref={props.setInputSearch}
        className="Search__input" 
        type="text"
        placeholder="buscar tu video fav"
        defaultValue="Default Value"
        //handleInputSearch={props.handleInputSearch}
        />
    </form>
)

export default Search;