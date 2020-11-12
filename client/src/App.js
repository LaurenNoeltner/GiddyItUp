import Header from "./components/Header/Header";
import Bounty from "./components/Bounty/Bounty";
import Saloon from "./components/Saloon/Saloon";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ParentBounty from "./components/ParentBounty/ParentBounty";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import NewChild from "./components/NewChild/NewChild";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     points: 0,
  //     show: true,
  //   };
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/Saloon" component={Saloon} />
              <Route exact path="/Bounty" component={Bounty} />
              <Route exact path="/ParentBounty" component={ParentBounty} />
              <Route exact path="/NewChild" component={NewChild} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
