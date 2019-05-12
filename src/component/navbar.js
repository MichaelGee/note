import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class='nav-wrapper'>
          <a href='#!' class='brand-logo'>
            Note
          </a>
          <a href='#' data-target='mobile-demo' class='sidenav-trigger'>
            <i class='material-icons'>menu</i>
          </a>
          <ul class='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>Sign up</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class='sidenav' id='mobile-demo'>
        <li>
          <a href='sass.html'>Sign up</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
