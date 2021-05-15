import React, { Component } from "react";
import "./App.css";
import SearchBox from "./Components/SearchBox/searchBox";
import axios from 'axios'
import SuperHeroResults from "./Components/SuperHeroResults/superHeroResults";
import Navigation from "./Components/Navigation/navigation";



class App extends Component {

  constructor() {
    super();
    this.state = {
      searchText: '',
      superHeroList: [],
      error: ''
    }
  }

  //handleSearchSuperHeroes
  handleSearchSuperHeroes = () => {
    axios.get(`https://superheroapi.com/api.php/1458682491139006/search/${this.state.searchText}`)
      .then(res => {
        const data = res.data;
        this.setState({ 
          superHeroList: data.results
         });
      }).catch(error => 
        this.setState({
          error: error
        })
        )
  }
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    })
    if(this.state.searchText.length === 0) {
      this.setState({
        superHeroList: [],
      })
    }
    if(this.state.searchText.length > 3) {
      this.handleSearchSuperHeroes();
    }

  }

  render() {
    return (
      <div className="App">
        {/* will add landing page with navigation on top, search box, search button, my favourite button   */}
        <header className="navBar">
          <Navigation></Navigation>
        </header>
        <div>
          <h1>
            Hello world here you can find all the superheroes and villians from
            all universes.
          </h1>
        </div>
        <section>
          <div>
                <SearchBox handleChange={this.handleChange} searchText={this.state.searchText}/>
            </div>
          <div>
            results
            <SuperHeroResults superHeroList={this.state.superHeroList}/>
            <div>{this.state.error}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
