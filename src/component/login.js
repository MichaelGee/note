import React from "react";
import { Link } from "react-router-dom";
import fireAuth from "./auth";
import TextArea from "./textarea";

const Login = () => {
  /*const login = e => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fireAuth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login sucessful");
      })
      .catch(error => {
        console.log(error);
        alert("User not registerd");
      });
  };*/
  return (
    <div className='container log_card'>
      <div className='row login-card'>
        <div className='col s12 m6 login center'>
          <div className='card white darken-1'>
            <div className='card-content black-text'>
              <span className='card-title'>Login</span>
              <form>
                <div className='row'>
                  <div className='input-field col s12'>
                    <i className='material-icons prefix'>account_circle</i>
                    <input
                      id='email'
                      type='email'
                      className='validate'
                      required
                    />
                    <label htmlFor='email'>Email</label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <i className='material-icons prefix'>lock</i>
                    <input
                      id='password'
                      type='password'
                      className='validate'
                      required
                    />
                    <label htmlFor='password'>Password</label>
                  </div>
                </div>
                <Link to='/note'>Login</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
