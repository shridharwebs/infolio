import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../components/Home.scss";
import jQuery from "jquery";

const Home = () => {
  return (
    <Fragment>
      <main>
        <section id="content" className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-6 container-fluid blogs">
                {/* ========== Search query section ====== */}
                <section id="Searchbox" className="searchbox">
                  <input
                    type="text"
                    placeholder="Search your query here..."
                    className="form-control"
                  />
                  <img
                    className="searchbox-icon-btn"
                    src={require("../assets/ico/search.png")}
                  ></img>
                </section>

                {/* ========== Blog box ====== */}
                <div className="blogbox">
                  <Link to="/blogview">
                    <img src={require("../assets/img/code-pad.jpg")}></img>
                  </Link>
                  <div className="blogdesc">
                    <h4>
                      <Link to="/blogview">
                        What is Coding? - Computer Science Degree Hub
                      </Link>
                    </h4>
                    <p>
                      Coding is basically the computer language used to develop
                      apps, websites, and software. Without it, we'd have none
                      of the most popular technology.
                    </p>
                    <div className="blog-statusbox">
                      <a href="#">
                        <b>
                          45.256 <small>Views</small>
                        </b>
                      </a>
                      <a href="#">
                        <b>
                          45.256 <small>Comments</small>
                        </b>
                      </a>
                      <a href="#">
                        <b>
                          45.256 <small>Likes</small>
                        </b>
                      </a>
                    </div>
                  </div>
                </div>

                {/* ========== Blog box ====== */}
                <div className="blogbox">
                  <Link to="/blogview">
                    <img src={require("../assets/img/4.jpg")}></img>
                  </Link>
                  <div className="blogdesc">
                    <h4>
                      <Link to="/blogview">
                        What is Coding? - Computer Science Degree Hub
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec elit ex. Etiam elementum lectus et tempor
                      molestie. Pellentesque vestibulum dui sit amet dui
                      volutpat sollicitudin. Etiam non erat finibus, iaculis
                      nunc vel, convallis eros. Etiam efficitur tempor dui,
                      vitae fringilla ipsum tristique quis.
                    </p>
                    <div className="blog-statusbox">
                      <a href="#">
                        <b>
                          45.256 <small>Views</small>
                        </b>
                      </a>
                      <a href="#">
                        <b>
                          45.256 <small>Comments</small>
                        </b>
                      </a>
                      <a href="#">
                        <b>
                          45.256 <small>Likes</small>
                        </b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 sidefield">
                <img src={require("../assets/img/code-pad.jpg")}></img>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

jQuery(function ($) {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 200) {
      $(".navbar").addClass("fixed-top");
    } else if ($(this).scrollTop() == 0) {
      $(".navbar").removeClass("fixed-top");
    }
  });

  function adjustNav() {
    var winWidth = $(window).width(),
      dropdown = $(".dropdown"),
      dropdownMenu = $(".dropdown-menu");

    if (winWidth >= 768) {
      dropdown.on("mouseenter", function () {
        $(this).addClass("show").children(dropdownMenu).addClass("show");
      });

      dropdown.on("mouseleave", function () {
        $(this).removeClass("show").children(dropdownMenu).removeClass("show");
      });
    } else {
      dropdown.off("mouseenter mouseleave");
    }
  }

  $(window).on("resize", adjustNav);

  adjustNav();
});

export default Home;
