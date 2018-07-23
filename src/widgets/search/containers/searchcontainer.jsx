import React, { Component } from 'react';
import Search from '../components/search.jsx';

class SearchContainer extends Component {

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.value);
    }

    setInputSearch = element => {
        this.input = element;
    }

    render(){
        return(
            <Search 
            handleSubmit={this.handleSubmit}
            setInputSearch={this.setInputSearch}
            />
        )
    }
}

export default SearchContainer;