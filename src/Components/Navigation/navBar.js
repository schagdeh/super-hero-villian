import React, { Component } from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navBarDiv">
        <nav className="navBar">
          <ul className="navBarUl">
            <li>
              <h1>
                <NavLink exact={true} to="/">Home</NavLink>
              </h1>
            </li>
            <li>
              <h1>
                {/* NavLink with number of fav list. */}
                <NavLink exact={true} to="/favourite">Favourite({this.props.favouriteList.length})</NavLink>
              </h1>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
