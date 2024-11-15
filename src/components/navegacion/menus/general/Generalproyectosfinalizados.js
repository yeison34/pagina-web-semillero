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
import proyectosfinalizados from "../../../../img/integrantes/foto con integrantes antiguos.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
import Finalizado from "../proyectos/Finalizado.js";

function Generalproyectosfinalizados() {
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
              top: "70%",
              left: "30%",
              right: "0%",
              bottom: "0",
            }}>
            <h6
              class="display-2 text-white mb-4 animated slideInDown"
              style={{ fontFamily: "Acme, sans-serif" }}>
              Proyectos Finalizados
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
                    Proyectos - finalizados
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Finalizado></Finalizado>
      <br></br>
      <br></br>
    </>
  );
}

export default Generalproyectosfinalizados;
