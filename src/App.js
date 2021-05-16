import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navigation from "./Components/Navigation/navBar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import FavouriteList from './Components/FavouriteList/favouriteList'
import fire from './Config/config';
import 'firebase/database'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      superHeroList: [],
      error: "",
      favouriteList: [],
    };

  }

  componentDidMount() {
    const previousFavouriteList = this.state.favouriteList;

    fire.database().ref('favouriteList').on('child_added', snap => {
      previousFavouriteList.push({
        favouriteList: snap.val()
      })
      this.setState({
        favouriteList: previousFavouriteList,
      })
    })
  }

  addToFavList = (id) => {
    const  matchedId = this.state.superHeroList.filter(superhero => superhero.id === id);
    const matched = matchedId[0]

     fire.database().ref('favouriteList').push(matched);
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
          error: error.message,
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
      <Router>
        <div className="App">
          {/* will add landing page with navigation on top, search box, search button, my favourite button   */}
          <header className="headerNavBar">
            <Navigation favouriteList={this.state.favouriteList}/>
          </header>
          <Switch>
            <Route path="/" exact>
              <Home
                handleChange={this.handleChange}
                searchText={this.state.searchText}
                superHeroList={this.state.superHeroList}
                error={this.state.error}
                addToFavList={this.addToFavList}
              />
            </Route>
            <Route path="/favourite" exact>
              <FavouriteList favouriteList={this.state.favouriteList}/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
