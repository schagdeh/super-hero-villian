import React, { Component } from "react";
import FavouriteListItem from "../FavouriteListItem/favouriteListItem";

export default class FavouriteList extends Component {

  render() {
    return (
      <div className="superHeroFavouriteDiv">
        {this.props.favouriteList || this.props.favouriteList > 0 ? this.props.favouriteList.map(fav => (
            <FavouriteListItem favouriteListItem={fav} delete={this.props.delete} id={fav.id} key={fav.id}/>
        )): <h1 style={{width: "100%"}}>There is no list to show, try adding your favorite heroes </h1>
        }
      </div>
    );
  }
}
