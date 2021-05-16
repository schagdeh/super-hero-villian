import React, { Component } from "react";
import "./App.css";
import SearchBox from "./Components/SearchBox/searchBox";
import SuperHeroResults from "./Components/SuperHeroResults/superHeroResults";

class Home extends Component {

  render() {
    return (
      <div className="App">
        <section className="searchSection">
          <div className="searchContainer">
            <h1 className="searchHeader">Search your SuperHeroes</h1>
            <div className="searchBoxContainer">
              <SearchBox
                handleChange={this.props.handleChange}
                searchText={this.props.searchText}
              />
            </div>
          </div>
        </section>

        <section className="searchResultsSection">
          <div className="searchResultsContainer">
            <h1>Your Search Results</h1>
            <SuperHeroResults superHeroList={this.props.superHeroList} addToFavList={this.props.addToFavList}/>
            <h1>{this.props.error}</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
