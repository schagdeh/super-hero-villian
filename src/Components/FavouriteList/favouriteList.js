import React, { Component } from "react";
import FavouriteListItem from "../FavouriteListItem/favouriteListItem";

export default class FavouriteList extends Component {

  render() {
    return (
      <div className="superHeroResultDiv">
        {this.props.favouriteList ? this.props.favouriteList.map(fav => (
            <FavouriteListItem favouriteListItem={fav}/>
        )): <h1>Something went wrong</h1>
        }
      </div>
    );
  }
}
