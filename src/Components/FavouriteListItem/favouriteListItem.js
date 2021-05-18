import React, { Component } from "react";
import './favouriteListItem.css'

export default class FavouriteListItem extends Component {

//  it handles removing fav list from firebase DB, it passes 
//  the id to its parent's container/component favouriteList.js
  handleRemoveFavList = (id) => {
    this.props.delete(id)
  }

  render() {
    
    return (
      <div className="superHeroFavouriteItemDiv">
        <div className="superHeroFavItemImageDiv">
          <img src={this.props.favouriteListItem.favouriteList.image.url} alt="super pic" />
        </div>
        <div className="superHeroInfoDiv">
          <h1>{this.props.favouriteListItem.favouriteList.name}</h1>
          <span>{this.props.favouriteListItem.favouriteList.biography["full-name"]}</span>
          <div className="superHeroPowerStatsDiv">
            <div>Gender: {this.props.favouriteListItem.favouriteList.appearance.gender}</div>
            <div>Intelligence: {this.props.favouriteListItem.favouriteList.powerstats.intelligence}</div>
            <div>Power: {this.props.favouriteListItem.favouriteList.powerstats.power}</div>
            <div>Strength: {this.props.favouriteListItem.favouriteList.powerstats.strength}</div>
            <div>Speed: {this.props.favouriteListItem.favouriteList.powerstats.speed}</div>
          </div>
        </div>
        <div className="addToFavButtonDiv">
          <button className="addToFavButton" 
            onClick={() => this.handleRemoveFavList(this.props.id)} >
              Delete
          </button>
        </div>
      </div>
    );
  }
}
