import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../lib/animate/animate.min.css";
import "../../lib/owlcarousel/assets/owl.carousel.min.css";
import "../../css/bootstrap.min.css";

import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";

import "../../lib/wow/wow.js";
import "../../lib/wow/wow.min.js";

import "../../lib/easing/easing.min.js";
import "../../lib/waypoints/waypoints.min.js";

import "../../lib/owlcarousel/owl.carousel.min.js";

import Principal from "../../img/integrantes/edicionintegrantes2023.jpg";
import Principal2 from "../../img/integrantes/integrantes2022.jpg";
import WOW from "wow.js";
import "../../js/main.js";
import "../../css/style.css";
function Carousel() {
  useEffect(() => {
    // Inicializar WOW.js aquí
    new WOW().init();
  }, []);
  return (
    <>
      <div className="container-fluid px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={Principal} className="img-fluid" alt="Second slide" />
              <div className="carousel-caption">
                <div
                  className="container carousel-content"
                  style={{ position: "absolute", bottom: 0 }}>
                  {/*<h6 className="text-secondary h4 animated fadeInUp">
                    Best IT Solutions
  </h6>*
                  <h1 className="text-white display-1 mb-4 animated fadeInRight">
                    An Innovative IT Solutions Agency
                  </h1>
                  <p className="mb-4 text-white fs-5 animated fadeInDown">
                    Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
                    interdum. Pellentesque aliquam dolor eget urna ultricies
                    tincidunt.
                  </p>
                  */}
                  <nav aria-label="breadcrumb animated fadeInRight">
                    <ol class="breadcrumb justify-content-center mb-0 animated fadeInRight">
                      {/*<Link to="/">
                        <li
                          class="breadcrumb-item text-black"
                          aria-current="page">
                          Home
                        </li>
                      </Link>
                */}
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Principal2} className="img-fluid" alt="Second slide" />
              <div className="carousel-caption">
                <div
                  className="container carousel-content"
                  style={{ position: "absolute", bottom: 0 }}>
                  <nav aria-label="breadcrumb animated fadeInRight">
                    <ol class="breadcrumb justify-content-center mb-0 animated fadeInRight">
                      {/* <Link to="/">
                        <li
                          class="breadcrumb-item text-white"
                          aria-current="page">
                          Home
                        </li>
                      </Link>
                */}
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <button
            style={{
              background: "blue",
              top: "50%",
              position: "absolute",
              width: "70px",
            }}
            className="carousel-control-prev bg-success"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next bg-success"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
            style={{
              background: "blue",
              top: "50%",
              position: "absolute",
              width: "70px",
            }}>
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
