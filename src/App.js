import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* will add landing page with navigation on top, search box, search button, my favourite button   */}
        <h1>
          Hello world here you can find all the superheroes and villians from
          all universes.
        </h1>
        <section>
          <div>
            <input type="text" />
            <button>Search</button>
          </div>
          <button>My Favourite</button>
        </section>
      </div>
    );
  }
}

export default App;
