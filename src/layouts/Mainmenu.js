import React, { Fragment } from "react";
import "../layouts/Mainmenu.css";

const Mainmenu = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container">
          <a href="#" class="navbar-brand">
            Infolio
          </a>
          <button
            type="button"
            class="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#main-nav"
          >
            <span class="menu-icon-bar"></span>
            <span class="menu-icon-bar"></span>
            <span class="menu-icon-bar"></span>
          </button>

          <div id="main-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li>
                <a href="#" class="nav-item nav-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-item nav-link">
                  About Us
                </a>
              </li>
              <li class="dropdown">
                <a href="#" class="nav-item nav-link" data-toggle="dropdown">
                  Services
                </a>
                <div class="dropdown-menu">
                  <a href="#" class="dropdown-item">
                    Dropdown Item 1
                  </a>
                  <a href="#" class="dropdown-item">
                    Dropdown Item 2
                  </a>
                  <a href="#" class="dropdown-item">
                    Dropdown Item 3
                  </a>
                </div>
              </li>
              <li class="dropdown">
                <a href="#" class="nav-item nav-link" data-toggle="dropdown">
                  Portfolio
                </a>
                <div class="dropdown-menu">
                  <a href="#" class="dropdown-item">
                    Dropdown Item 1
                  </a>
                  <a href="#" class="dropdown-item">
                    Dropdown Item 2
                  </a>
                  <a href="#" class="dropdown-item">
                    Dropdown Item 3
                  </a>
                  <a href="#" class="dropdown-item">
                    Dropdown Item 4
                  </a>
                  <a href="#" class="dropdown-item">
                    Dropdown Item 5
                  </a>
                </div>
              </li>
              <li>
                <a href="#" class="nav-item nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Mainmenu;
