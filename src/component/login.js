import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
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
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i class="material-icons prefix">lock</i>
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      required
                    />
                    <label for="password">Password</label>
                  </div>
                </div>
                <Link to="/note">
                  <a class="waves-effect waves-light btn lgn-btn">Login</a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
