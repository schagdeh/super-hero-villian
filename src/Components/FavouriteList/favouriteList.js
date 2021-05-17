import React, { Component } from "react";
import FavouriteListItem from "../FavouriteListItem/favouriteListItem";

export default class FavouriteList extends Component {

  render() {
    return (
      <div className="superHeroFavouriteDiv">
        {this.props.favouriteList ? this.props.favouriteList.map(fav => (
            <FavouriteListItem favouriteListItem={fav} /* delete={this.props.delete} *//>
        )): <h1>Something went wrong</h1>
        }
      </div>
    );
  }
}
