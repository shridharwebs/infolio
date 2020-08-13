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
              <div class="col-md-8 blogs">
                <section id="Searchbox" className="searchbox">
                  <input type="text" className="form-control"></input>
                  <br />
                  <br />
                  <br />
                </section>
                <img src={require("../assets/img/23.jpg")}></img>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec elit ex. Etiam elementum lectus et tempor
                  molestie. Pellentesque vestibulum dui sit amet dui volutpat
                  sollicitudin. Etiam non erat finibus, iaculis nunc vel,
                  convallis eros. Etiam efficitur tempor dui, vitae fringilla
                  ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper
                  ex et viverra vulputate. Nam lectus ligula, pretium nec risus
                  nec, ultricies fringilla mauris. Proin quis venenatis neque,
                  iaculis porta nulla.{" "}
                </p>
              </div>
              <div class="col-md-4 sidefield">
                <img src={require("../assets/img/23.jpg")}></img>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec elit ex. Etiam elementum lectus et tempor
                  molestie. Pellentesque vestibulum dui sit amet dui volutpat
                  sollicitudin. Etiam non erat finibus, iaculis nunc vel,
                  convallis eros. Etiam efficitur tempor dui, vitae fringilla
                  ipsum tristique quis. Aliquam erat volutpat. Cras ullamcorper
                  ex et viverra vulputate. Nam lectus ligula, pretium nec risus
                  nec, ultricies fringilla mauris. Proin quis venenatis neque,
                  iaculis porta nulla.{" "}
                </p>
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
