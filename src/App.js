import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Login from "./component/login";
import Introtext from "./component/introtext";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Introtext />
        <Login />
      </div>
    );
  }
}

export default App;
