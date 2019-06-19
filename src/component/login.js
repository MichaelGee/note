import React, { useState } from "react";
import firebase from "./fireConfig";
import { withRouter } from "react-router-dom";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await firebase.login(email, password);
      props.history.replace("/note");
      console.log("Logged in successfully");
      console.log(firebase.getCurrentUser());
    } catch (error) {
      console.log(error.message);
    }
  };

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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
