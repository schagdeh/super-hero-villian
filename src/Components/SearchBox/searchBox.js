import React, { Component } from 'react'
import './searchBox.css'

class SearchBox extends Component {
    render(props) {
        return (
            // input to handle user input and search for the heroes.
            <div className="searchInputDiv">
                <input 
                id="superHeroSearchInput"
                type="search" 
                placeholder="Enter name" 
                onChange={this.props.handleChange}
                value={this.props.searchText}
                />
            </div>
        )
    }
}

export default SearchBox