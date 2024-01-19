import React from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";

import facultad from "../../../../img/general/facultadingenieria.jpg";
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
import coordinadora from "../../../../img/coordinacion/coordinadora.jpeg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
function Coordinacion() {
  return (
    <>
      <div style={{ position: "relative", background: "gray" }}>
        <img
          src={facultad}
          style={{
            minWidth: "100%",
            minHeight: "560px",
            maxWidth: "100%",
            opacity: "0.2",
          }}></img>
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "40%",
            left: "42%",
            bottom: "0",
          }}>
          <div
            class="title-area"
            style={{ textAlign: "center", color: "white" }}>
            <h2>Coordinación</h2>
            <div class="separator separator-success">✻</div>
          </div>
          <div>
            <div>
              <img
                src={coordinadora}
                alt="..."
                class="img-circle"
                style={{
                  height: "250px",
                  width: "200px",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "70%",
            right: "30%",
            left: "30%",
            color: "white",
          }}>
          <center>
            <h3>Sandra Marcela Guerrero Calvache</h3>
          </center>
          <p style={{ textAlign: "justify" }}>
            Ingeniera de Sistemas de la Universidad de Nariño, egresada
            distinguida y grado de honor,Magister en Ingeniería de Sistemas y
            Computación de la Universidad de Nariño. Coordinadora del Semillero
            de Investigación Green Clouds de la Universidad de Nariño Sede
            Ipiales e investigadora del Grupo de Investigación GRIAS. Correo
            institucional: marcela1396@udenar.edu.co
          </p>
        </div>
      </div>
    </>
  );
}

export default Coordinacion;
