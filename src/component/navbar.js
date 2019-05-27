import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo" style={{ marginLeft: "6%" }}>
            Note
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down" style={{ marginRight: "4%" }}>
            <li>
              <Link to="/signup" style={{ fontSize: "1.2rem" }}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
