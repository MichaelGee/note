import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4" />
          <div className="col-4">
            <form id="login-form">
              <div className="email">
                <label for="exampleInputEmail1">Email address</label>
                <input id="login-email" type="text" class="form-control" />
              </div>

              <div className="password">
                <label for="exampleInputEmail1">Password</label>
                <input
                  id="login-password"
                  type="password"
                  class="form-control"
                />
              </div>
              <div className="login-btn text-center">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block mt-4"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
