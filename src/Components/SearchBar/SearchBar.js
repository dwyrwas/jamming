import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends React.Component{
    render(){
        <div class="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button class="SearchButton">SEARCH</button>
        </div>
    }
}

export { SearchBar };