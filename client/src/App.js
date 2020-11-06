import Header from "./components/Header";
import Bounty from "./components/Bounty";
import Saloon from "./components/Saloon";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect,
  // useLocation,
} from "react-router-dom";
// import Footer from "./components/Footer";
// import axios from "axios";

// const { default: Header } = require("./components/Header");

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Whaddup React Rulz</h1>
            <Header />
            <Switch>
              <Route exact path="/Saloon" component={Saloon} />
              <Route exact path="/Bounty" component={Bounty} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
