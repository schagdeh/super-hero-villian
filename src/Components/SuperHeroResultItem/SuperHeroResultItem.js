import React, { Component } from "react";
import "./SuperHeroResultItem.css";

export default class SuperHero extends Component {

  render() {
    console.log(this.props.data);
    return (
      // all the heroes item info is displayed in the form of cards.
      <div className="superHeroResultDiv">
        <div className="superHeroImageDiv">
          <img src={this.props.data.image.url} alt="super pic" />
        </div>
        <div className="superHeroInfoDiv">
          <h1>{this.props.data.name}</h1>
          <span>{this.props.data.biography["full-name"]}</span>
          <div className="superHeroPowerStatsDiv">
            <div>Gender: {this.props.data.appearance.gender}</div>
            <div>Intelligence: {this.props.data.powerstats.intelligence}</div>
            <div>Power: {this.props.data.powerstats.power}</div>
            <div>Strength: {this.props.data.powerstats.strength}</div>
            <div>Speed: {this.props.data.powerstats.speed}</div>
          </div>
        </div>
        <div className="addToFavButtonDiv">
          {/* onclick of button will pass the id to its parent's component and add the hero item to firebase list. */}
          <button className="addToFavButton" onClick={() => this.props.addToFavList(this.props.data.id)}>add to Fav</button>
        </div>
      </div>
    );
  }
}
