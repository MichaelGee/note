import React, { Component } from "react";
import "./App.css";
import Home from "./component/home";
import Navbar from "./component/navbar";
import Signup from "./component/signup";
import { Route, BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/signup" exact={true} component={Signup} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
