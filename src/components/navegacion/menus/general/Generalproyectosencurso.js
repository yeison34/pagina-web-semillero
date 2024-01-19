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
import proyectosfinalizados from "../../../../img/general/sedeipiales.gif";
//imagenes carousel
import Grupo from "../../../../img/integrantes/edicionintegrantes2023.gif";
import Steammaker from "../../../../img/proyectos/imgcarousel/steammaker.jpg";
import Travelprov from "../../../../img/proyectos/imgcarousel/travelprov.jpg";
import Segujaz from "../../../../img/proyectos/imgcarousel/segujaz.jpg";
import Plantsgpt from "../../../../img/proyectos/imgcarousel/plantsgpt.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
import Encurso from "../proyectos/Encurso.js";
function Generalproyectosencurso() {
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
            src={proyectosfinalizados}
            style={{
              maxWidth: "100%",
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
            <h6 class="display-2 text-white mb-4 animated slideInDown">
              Proyectos En Curso
            </h6>
            <div
              class="text-white animated slideInDown"
              style={{
                width: "400px",
                height: "400px",
                color: "white",
                marginLeft: "90px",
              }}>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                  <li class="breadcrumb-item">
                    <Link to="/" style={{ color: "white" }}>
                      Home
                    </Link>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    Proyectos
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    Proyectos - En Curso
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Encurso></Encurso>
      <br></br>
      <br></br>
    </>
  );
}

export default Generalproyectosencurso;
