import React from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";
import { FaMusic } from "react-icons/fa6";
import { SlBookOpen } from "react-icons/sl";
import { MdAirlineStops } from "react-icons/md";

import participantes from "../../../../img/general/udenar.gif";
import objetivo1 from "../../../../img/general/objetivo1.jpg";
import objetivo2 from "../../../../img/general/objetivo2.jpg";
import objetivo3 from "../../../../img/general/objetivo3.jpg";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
import "../../../../css/gaia.css";
import "../../../../css/demo.css";
import "../../../../css/style.css";

function Presentacion() {
  return (
    <>
      <div className="wow fadeIn" data-wow-delay=".3s">
        <div class="title-area" style={{ textAlign: "center" }}>
          <h2>Presentación</h2>
          <div class="separator separator-success">✻</div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <br></br>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
            className="col-sm-6">
            <p class="description" style={{ color: "black" }} align="center">
              GREEN CLOUDS: que en su traducción significa Nubes Verdes. <br />
              Un Semillero que nace a principios del año 2020 y que pertenece al
              programa de Ingenieria de Sistemas de la Universidad de Nariño,
              Sede Regional Ipiales.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="wow fadeIn">
        <div class="row">
          <div className="col-md-1"></div>
          <div class="col-md-3">
            <div class="info-icon">
              <div class="icon text-success">
                <MdAirlineStops />
              </div>
              <h3>Misión</h3>
              <p class="description" align="justify">
                GREEN CLOUDS es un semillero fundamentado en las Ciencias de la
                Computación y la Ingeniería de Sistemas que busca fomentar la
                cultura investigativa, trabajo en equipo, innovación y
                desarrollo tecnológico mediante el fortalecimiento de
                competencias críticas que contribuyan a la generación de ideas
                que se concreten en proyectos que beneficien a la región
                nariñense.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info-icon">
              <div class="icon text-success">
                <SlBookOpen />
              </div>
              <h3>Visión</h3>
              <p class="description" align="justify">
                En el 2025 seremos reconocidos por la comunidad académica a
                nivel regional por ser un semillero que fomenta fuertes
                capacidades investigativas en sus integrantes incorporando
                nuevos proyectos que permitan la generación de conocimiento en
                el área de las Ciencias de la Computación y la Ingeniería de
                Sistemas.
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-icon">
              <div class="icon text-success">
                <FaMusic />
              </div>
              <h3>Valores</h3>
              <p class="description" align="justify">
                El Semillero de Investigación trabaja colectivamente por
                alcanzar sus objetivos, busca a través del estudio y la
                investigación ayudar a solventar necesidades de la sociedad y se
                caracterizará por poseer valores tales como Responsabilidad,
                Trabajo en equipo, Transparencia y Espíritu Investigativo,
                analítico y crítico.
              </p>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div
        className="wow fadeIn"
        data-wow-delay=".3s"
        style={{ background: "gray", position: "relative" }}>
        <img
          src={participantes}
          style={{ opacity: "0.1", maxWidth: "100%" }}></img>
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "0%",
            bottom: "0",
            left: "0",
            padding: "auto",
          }}>
          <div class="title-area" style={{ textAlign: "center" }}>
            <h2 style={{ color: "white" }}>Objetivos</h2>
            <div style={{ color: "white" }} class="separator separator-success">
              ✻
            </div>
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <center>
                  <p style={{ textAlign: "justify", color: "white" }}>
                    Implementar procesos investigativos encaminados al
                    emprendimiento e innovación en el área de las Ciencias de la
                    Computación y la Ingeniería de Sistemas que conduzcan a la
                    solución de las problemáticas que se presentan en el
                    municipio de Ipiales.
                  </p>
                </center>
              </div>
              <div className="col-sm-3"></div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-sm-1"></div>
              <div
                className="col-sm-3"
                style={{
                  border: "1px solid ",
                  borderRadius: "10px ",
                  background: "white",
                  margin: "10px",
                  padding: "5px",
                  height: "450px",
                }}>
                <br></br>
                <img
                  src={objetivo1}
                  style={{ height: "200px", width: "200px" }}></img>
                <br></br>
                <br></br>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  <h4>Objetivo Especifico 1</h4>
                </p>
                <br></br>
                <p style={{ textAlign: "justify", padding: "10px" }}>
                  Introducir a los integrantes en la formación en investigación,
                  emprendimiento, innovación y desarrollo tecnológico, como ejes
                  fundamentales y de aplicación en cualquier área del
                  conocimiento.
                </p>
              </div>
              <div
                className="col-sm-3"
                style={{
                  border: "1px solid ",
                  borderRadius: "10px ",
                  background: "white",
                  margin: "10px",
                  padding: "5px",
                  height: "450px",
                }}>
                <br></br>
                <img
                  src={objetivo2}
                  style={{ height: "200px", width: "200px" }}></img>
                <br></br>
                <br></br>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  <h4>Objetivo Especifico 2</h4>
                </p>
                <br></br>
                <p style={{ textAlign: "justify", padding: "10px" }}>
                  Consolidar proyectos de investigación orientados a las
                  diferentes problemáticas que presenta la comunidad buscando el
                  aprovechamiento de las nuevas tecnologías.
                </p>
              </div>
              <div
                className="col-sm-3 objetivo"
                style={{
                  border: "1px solid ",
                  borderRadius: "10px ",
                  background: "white",
                  margin: "10px",
                  padding: "5px",
                  height: "450px",
                }}>
                <br></br>
                <img
                  src={objetivo3}
                  style={{ height: "200px", width: "200px" }}></img>
                <br></br>
                <br></br>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  <h4>Objetivo Especifico 3</h4>
                </p>
                <br></br>
                <p style={{ textAlign: "justify", padding: "10px" }}>
                  Fomentar el trabajo en equipo y la participación de los
                  integrantes para el desarrollo de diversos proyectos bajo las
                  líneas de investigación establecidas.
                </p>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentacion;
