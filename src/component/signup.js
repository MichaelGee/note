import React from "react";
import fireAuth from "./fireConfig";

const Signup = () => {
  const reg = e => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fireAuth
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Sucessfully signed up user");
      })
      .catch(error => {
        console.log(error);
      });
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
                    <i className="material-icons prefix">mail_outline</i>
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
                <a className="waves-effect  btn sgnup-btn" onClick={reg}>
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

export default Signup;
