import React from "react";

const Signup = () => {
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
                    />
                    <label for="username">Username</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mail_outline</i>
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
                    <i className="material-icons prefix">lock</i>
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      required
                    />
                    <label for="password">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">lock_outline</i>
                    <input
                      id="conf_password"
                      type="password"
                      className="validate"
                      required
                    />
                    <label for="conf_password">Confirm Password</label>
                  </div>
                </div>
                <a class="waves-effect waves-light btn sgnup-btn">Login</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
