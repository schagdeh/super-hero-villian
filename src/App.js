import React, { Component } from "react";
import "./App.css";
import SearchBox from "./Components/SearchBox/searchBox";
import axios from "axios";
import SuperHeroResults from "./Components/SuperHeroResults/superHeroResults";
import Navigation from "./Components/Navigation/navBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      superHeroList: [],
      error: "",
    };
  }

  //handleSearchSuperHeroes
  handleSearchSuperHeroes = () => {
    axios
      .get(
        `https://superheroapi.com/api.php/1458682491139006/search/${this.state.searchText}`
      )
      .then((res) => {
        const data = res.data;
        this.setState({
          superHeroList: data.results,
        });
      })
      .catch((error) =>
        this.setState({
          error: error,
        })
      );
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
    if (this.state.searchText.length === 0) {
      this.setState({
        superHeroList: [],
      });
    }
    if (this.state.searchText.length > 3) {
      this.handleSearchSuperHeroes();
    }
  };

  render() {
    return (
      <div className="App">
        {/* will add landing page with navigation on top, search box, search button, my favourite button   */}
        <header className="headerNavBar">
          <Navigation></Navigation>
        </header>

        <section className="searchSection">
          <div className="searchContainer">
            <h1 className="searchHeader">Search your SuperHeroes</h1>
            <div className="searchBoxContainer">
              <SearchBox
                handleChange={this.handleChange}
                searchText={this.state.searchText}
              />
            </div>
          </div>
        </section>

        <section className="searchResultsSection">
          <div className="searchResultsContainer">
            <h1>Your Search Results</h1>
            <SuperHeroResults superHeroList={this.state.superHeroList} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
