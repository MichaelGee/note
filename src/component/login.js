import React from "react";
import fireAuth from "./fireConfig";
import { withRouter } from "react-router-dom";

const Login = props => {
  const login = callback => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fireAuth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login successful");
        callback();
      })
      .catch(error => {
        console.log(error);
        alert("Your password is wrong or user not registerd");
      });
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
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <a
                  className="waves-effect  btn sgnup-btn"
                  onClick={() => {
                    login(() => {
                      props.history.push("/note");
                    });
                  }}
                >
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
