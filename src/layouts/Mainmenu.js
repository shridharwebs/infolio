import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../layouts/Mainmenu.scss";

const Mainmenu = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src={require("../assets/img/1.png")}></img>CodeBugi
          </a>
          <button
            type="button"
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#main-nav"
          >
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
          </button>

          <div id="main-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="nav-item nav-link">
                  Recent Blogs
                </Link>
              </li>
              <li>
                <Link to="/categories" className="nav-item nav-link">
                  Categories
                </Link>
              </li>
              <li className="dropdown hidden hide">
                <Link
                  to="/categories"
                  className="nav-item nav-link"
                  data-toggle="dropdown"
                >
                  List
                </Link>
                <div className="dropdown-menu">
                  <Link to="/list" className="dropdown-item">
                    Dropdown Item 1
                  </Link>
                  <a href="#" className="dropdown-item">
                    Dropdown Item 2
                  </a>
                  <a href="#" className="dropdown-item">
                    Dropdown Item 3
                  </a>
                </div>
              </li>
              <li>
                <Link to="/Support" className="nav-item nav-link">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Mainmenu;
