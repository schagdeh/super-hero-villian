import React, { Component } from "react";
import FavouriteListItem from "../FavouriteListItem/favouriteListItem";

export default class FavouriteList extends Component {
  render() {
    return (
      <div className="superHeroFavouriteDiv">
        {/* if favouriteList if greater than 0, favouriteList is maped and 
        all the fav list card will be shown or else h1 tag with be shown */}
        {this.props.favouriteList.length > 0 ? (
          this.props.favouriteList.map((fav) => (
            <FavouriteListItem
              favouriteListItem={fav}
              delete={this.props.delete}
              id={fav.id}
              key={fav.id}
            />
          ))
        ) : (
          <h1 style={{ width: "100%", color: "#ffffff" }}>
            There is no list to show, try adding your favorite heroes
          </h1>
        )}
      </div>
    );
  }
}
