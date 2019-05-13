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
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to="/signup">
                <a href="">Sign up</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/signup">
            <a href="">Sign up</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
