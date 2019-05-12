import React from "react";

const Signup = () => {
  return (
    <div className="container">
      <div className="row signup-card">
        <div className="col s12 m6 signup center">
          <div className="card white darken-1">
            <div className="card-content black-text">
              <span className="card-title">Login</span>
              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="username" type="text" className="validate" />
                    <label for="email">Username</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label for="password">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="conf_password"
                      type="password"
                      className="validate"
                    />
                    <label for="password">Confirm Password</label>
                  </div>
                </div>
                <a class="waves-effect waves-light btn">Login</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
