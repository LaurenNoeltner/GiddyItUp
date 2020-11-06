const { default: Navbar } = require("./components/Navbar");

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Whaddup React Rulz</h1>
          <Navbar />
          <Switch>
            <Route exact path="/Saloon" component={Saloon} />
            <Route exact path="/Bounty" component={Bounty} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
