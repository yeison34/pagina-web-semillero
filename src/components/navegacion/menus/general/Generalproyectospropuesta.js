import React from "react";
import { Link } from "react-router-dom";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";

//imagenes steamaker
import steamaker1 from "../../../../img/proyectos/STEAM MAKER/foto1.jpg";
import steamaker2 from "../../../../img/proyectos/STEAM MAKER/foto2.jpeg";

//imagenes plants-gpt
import plantsgpt1 from "../../../../img/proyectos/PLANTS GPT/foto1.jpg";
import plantsgpt2 from "../../../../img/proyectos/PLANTS GPT/foto2.jpg";

//imagenes segujaz
import segujaz1 from "../../../../img/proyectos/SEGUJAZ/foto1.jpg";
import segujaz2 from "../../../../img/proyectos/SEGUJAZ/foto2.jpg";

//imagenes travelprov
import travelprov1 from "../../../../img/proyectos/TRAVELPROV/foto1.jpg";
import travelprov2 from "../../../../img/proyectos/TRAVELPROV/foto2.jpg";
import propuestas from "../../../../img/general/propuesta.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
import Encurso from "../proyectos/Encurso.js";

function Generalproyectospropuesta() {
  return (
    <>
      <div>
        <div
          style={{
            position: "relative",
            background: "gray",
            minHeight: "30%",
            height: "550px",
            overflow: "hidden",
          }}>
          <img
            src={propuestas}
            style={{
              maxWidth: "100%",
              minWidth: "100%",
              opacity: "0.5",
            }}></img>
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "30%",
              right: "0%",
              bottom: "0%",
            }}>
            <h6
              class="display-2 text-white mb-4 animated slideInDown"
              style={{ paddingLeft: "110px", fontFamily: "Acme, sans-serif" }}>
              Propuestas
            </h6>
            <div
              class="text-white animated slideInDown"
              style={{
                width: "400px",
                height: "400px",
                color: "white",
                paddingLeft: "70px",
              }}>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                  <li
                    class="breadcrumb-item"
                    style={{ fontFamily: "Acme, sans-serif" }}>
                    <Link to="/" style={{ color: "white" }}>
                      Home
                    </Link>
                  </li>
                  <li
                    class="breadcrumb-item"
                    aria-current="page"
                    style={{ fontFamily: "Acme, sans-serif" }}>
                    Proyectos
                  </li>
                  <li
                    class="breadcrumb-item"
                    aria-current="page"
                    style={{ fontFamily: "Acme, sans-serif" }}>
                    Propuestas
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Generalproyectospropuesta;
