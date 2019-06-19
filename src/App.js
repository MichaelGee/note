import React, { Component } from "react";
import "./App.css";
import Home from "./component/home";
import Navbar from "./component/navbar";
import Signup from "./component/signup";
import Note from "./component/note";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "./component/protectedRoute";
import fourZeroFour from "./component/404";

class App extends Component {
  //console.log(FireAuth.auth().currentUser);

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              
                <ProtectedRoute path="/note" component={Note} />
              
                <Route path="/" exact={true} component={Home} />
              

              <Route path="/signup" exact={true} component={Signup} />
              <Route component={fourZeroFour} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
