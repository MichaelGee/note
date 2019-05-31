import React, { Component } from "react";
import "./App.css";
import Home from "./component/home";
import Navbar from "./component/navbar";
import Signup from "./component/signup";
import Note from "./component/note";
import firebase from "firebase";
import { Route, BrowserRouter as Router } from "react-router-dom";
import FireAuth from "./component/auth";

let crntUser = firebase.auth().currentUser;
class App extends Component {
  /* state = {
    user: null
  };

  authListener() {
    FireAuth.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        console.log(`${crntUser} is logged in.`);
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }
*/
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Route path='/' exact={true} component={Home} />
            <Route path='/note' exact={true} component={Note} />
            <Route path='/signup' exact={true} component={Signup} />
            {/* {this.state.user ? ( 
              <Route path="/note" exact={true} component={Note} />
            ) : (
              <Route path="/" exact={true} component={Home} />
            )}
            <Route path="/signup" exact={true} component={Signup} />*/}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
