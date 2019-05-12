import React from "react";

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
                <a class="waves-effect waves-light btn">Login</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
