import React, { Component } from 'react'

class SearchBox extends Component {
    render(props) {
        return (
            <div>
                <input 
                type="search" 
                placeholder="Enter a name" 
                onChange={this.props.handleChange}
                value={this.props.searchText}
                />
            </div>
        )
    }
}

export default SearchBox