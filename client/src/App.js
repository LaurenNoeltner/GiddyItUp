import Header from "./components/Header";
import Bounty from "./components/Bounty";
import Saloon from "./components/Saloon";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentBounty from "./components/ParentBounty";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
            <Switch>
              <Route exact path="/Saloon" component={Saloon} />
              <Route exact path="/Bounty" component={Bounty} />
              <Route exact path="/ParentBounty" component={ParentBounty} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
