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
      searchText: "", // this value comes from user input. its is superheroes name.
      superHeroList: [], // list of all the superheros associate with this.state.searchText. data comes from api call function getSuperHeroes()
      error: "",         // error if there is something wrong from server side
      favouriteList: [], // list of all the favorite superheroes stored in firebase realtime DB.
    };

  }

  componentDidMount() {
    const previousFavouriteList = this.state.favouriteList;
    
    // on child added to favourite list in firebase realtime DB it updates favourites list
    fire.database().ref('favouriteList').on('child_added', snap => {
      previousFavouriteList.push({
        id: snap.key,
        favouriteList: snap.val()
      })
      this.setState({
        favouriteList: previousFavouriteList,
      })
    });

    //on child removed from favourite list in firbase realtime DB it updates favourite list
    fire.database().ref('favouriteList').on('child_removed', snap => {
      console.log(snap, "from snap shoot");
      for (let i=0; i<previousFavouriteList.length; i++) {
        if(previousFavouriteList[i].id === snap.key) {
          previousFavouriteList.splice(i, 1);
        }
      }
      this.setState({
        favouriteList: previousFavouriteList
      })
    })

  }

  // removing from favourite list from firebase
  removeFromFavList = (id) => {
    fire.database().ref('favouriteList').child(id).remove();
  }

  // adding to favourite list in firebase
  addToFavList = (id) => {
    const  matchedId = this.state.superHeroList.filter(superhero => superhero.id === id);
    const matched = matchedId[0]

     fire.database().ref('favouriteList').push(matched);
  }

  //gets searched results form its api and set this.state.superHeroList to its data
  getSuperHeroes = () => {
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

  // it handles input event. it gets the user typed char and sets this.state.searchText to its targeted value
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
      // if this.searchText.length is 0 the superHeroList is empty array[]
    if (this.state.searchText.length === 0) {
      this.setState({
        superHeroList: [],
      });
    }
    // if this.searchText.length is greater than or equal to 3 than only the superHeroList is filled with the data from getSuperHeroes() functions
    if (this.state.searchText.length >= 3) {
      this.getSuperHeroes();
    }

  };

  render() {
    return (
      // router to go to different routes without reloading the page.
      <Router>
        <div className="App">
          {/* will add landing page with navigation on top, search box, my favourite button   */}
          <header className="headerNavBar">
            {/* favouriteList if passed as props to get its length to show user the number of its fav list */}
            <Navigation favouriteList={this.state.favouriteList}/>
          </header>
          <Switch>
            <Route path="/" exact>
              {/* its just a container to searchBox and superHeroResults components */}
              <Home
                handleChange={this.handleChange}
                searchText={this.state.searchText}
                superHeroList={this.state.superHeroList}
                error={this.state.error}
                addToFavList={this.addToFavList}
              />
            </Route>
            <Route path="/favourite" exact>
              <FavouriteList favouriteList={this.state.favouriteList} delete={this.removeFromFavList} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
