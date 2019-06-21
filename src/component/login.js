import React, { useState, useEffect } from "react";
import firebasee from "./fireConfig";
import firebase from "firebase";
import { withRouter } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    firebasee.isInitialized(user => {
      setSignedIn(!!user);
    });
  });

  const firebaseUiConfig = {
    signInFlow: "popup",
    signinSuccessUrl: "/note",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signedInSuccessful: () => false
    }
  };

  const login = async () => {
    try {
      await firebasee.login(email, password);
      props.history.replace("/note");
      console.log("Logged in successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (firebasee.getCurrentUser()) {
    props.history.push("/note");
  }
  return (
    <div className="container log_card">
      <div className="row login-card">
        <div className="col s12 m6 login center">
          <div className="card white darken-1">
            <div className="card-content black-text">
              <span className="card-title">Login</span>
              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <a className="waves-effect  btn sgnup-btn" onClick={login}>
                  Login
                </a>
                {signedIn ? (
                  props.history.replace("/note")
                ) : (
                  <StyledFirebaseAuth
                    uiConfig={firebaseUiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
