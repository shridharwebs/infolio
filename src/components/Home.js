import React, { Fragment } from "react";
import "../components/Home.scss";
import jQuery from "jquery";

const Home = () => {
  return (
    <Fragment>
      <main>
        <section id="content" class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-1"></div>

              <div class="col-md-6 container-fluid blogs">
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
                  <a href="#">
                    <img src={require("../assets/img/code-pad.jpg")}></img>
                  </a>
                  <div className="blogdesc">
                    <h4>
                      Etiam elementum lectus et tempor molestie. Pellentesque
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

                {/* ========== Blog box ====== */}
                <div className="blogbox">
                  <a href="#">
                    <img src={require("../assets/img/4.jpg")}></img>
                  </a>
                  <div className="blogdesc">
                    <h4>
                      Etiam elementum lectus et tempor molestie. Pellentesque
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
              <div class="col-md-2 sidefield">
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
