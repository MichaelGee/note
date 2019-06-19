import React from "react";
import { Link } from "react-router-dom";
import fireAuth from "./fireConfig";
const Navbar = () => {
  const logout = () => {
    fireAuth
      .auth()
      .signOut()
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch(error => {
        console.log("A problem occured while trying to log out");
      });
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo" style={{ marginLeft: "6%" }}>
            Note
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul
            className="right hide-on-med-and-down"
            style={{ marginRight: "4%" }}
          >
            <li>
              <Link to="/signup" style={{ fontSize: "1.2rem" }}>
                Sign up
              </Link>
            </li>
          </ul>
          <ul
            className="right hide-on-med-and-down"
            style={{ marginRight: "4%" }}
          >
            <li>
              <a
                style={{ fontSize: "1.2rem" }}
                onClick={() => {
                  logout(() => window.history.push("/"));
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/signup" onClick={logout}>
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
