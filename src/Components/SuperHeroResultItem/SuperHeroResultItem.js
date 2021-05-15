import React, { Component } from "react";

export default class SuperHero extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <div>
          <img src={this.props.data.image.url} alt="super pic" />
        </div>
        <div>
          <h1>{this.props.data.name}</h1>
          <span>
            {this.props.data.biography["full-name"]}
          </span>
          <br />
          <span>
            Gender: {this.props.data.appearance.gender}
          </span>
          <div>
            <div>Intelligence: {this.props.data.powerstats.intelligence}</div>
            <div>Power: {this.props.data.powerstats.power}</div>
            <div>Strength: {this.props.data.powerstats.strength}</div>
            <div>Speed: {this.props.data.powerstats.speed}</div>
          </div>
        </div>
      </div>
    );
  }
}
