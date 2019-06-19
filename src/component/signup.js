import React, { useState } from "react";
import firebase from "./fireConfig";
import { withRouter } from "react-router-dom";

const Signup = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await firebase.signup(username, email, password);
      props.history.replace("/note");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row signup-card">
        <div className="col s12 m6 signup center">
          <div className="card white darken-1">
            <div className="card-content black-text">
              <span className="card-title">Signup</span>
              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="username"
                      type="text"
                      className="validate"
                      required
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mail_outline</i>
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
                <a className="waves-effect  btn sgnup-btn" onClick={signup}>
                  Signup
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signup);
