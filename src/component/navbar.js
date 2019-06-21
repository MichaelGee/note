import React from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./fireConfig";

const Navbar = props => {
  const logout = async () => {
    await firebase.logout();
    props.history.push("/");
    console.log("Successfully logged out");
  };

  return firebase.getCurrentUser() ? (
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
              <Link to="/note" style={{ fontSize: "1.2rem" }}>
                {`Hi, ${firebase.getCurrentUser()}`}
              </Link>
            </li>
          </ul>
          <ul
            className="right hide-on-med-and-down"
            style={{ marginRight: "4%" }}
          >
            <li>
              <a style={{ fontSize: "1.2rem" }} onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/note">{`Hi, ${firebase.getCurrentUser()}`}</Link>
        </li>
      </ul>
    </div>
  ) : (
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
              <a style={{ fontSize: "1.2rem" }} onClick={logout}>
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

export default withRouter(Navbar);
