import React, { Fragment } from "react";
import "../components/Home.scss";
import jQuery from "jquery";

const BlogView = () => {
  return (
    <Fragment>
      <main>
        <section id="content" className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
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

                <div className="col-md-12">
                  <h2>What is Coding? - Computer Science Degree Hub</h2>
                  <h5>Shridhar Patil</h5>
                  <hr />
                  <div className="">Blog contents here...</div>
                </div>
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

export default BlogView;
