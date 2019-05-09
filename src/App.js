import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./component/jumbotron";
import Signup from "./component/signup";
class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Signup />
      </div>
    );
  }
}

export default App;
