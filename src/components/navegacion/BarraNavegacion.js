import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { Outlet } from "react-router";
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

import Principal from "../../img/carousel/principal.jpg";
import WOW from "wow.js";
import "../../js/main.js";
import "../../css/style.css";
function BarraNavegacion() {
  return (
    <>
      <div
        className="container-fluid bg-dark py-2 d-none d-md-flex"
        style={{ background: "green" }}>
        <div className="container">
          <div className="d-flex justify-content-between topbar">
            <div className="top-info">
              <small className="me-3 text-white-50">
                <a to="#">
                  <BiLogoGmail className="me-2 text-secondary"></BiLogoGmail>
                </a>
                greenclouds@udenar.edu.co
              </small>
            </div>
            <div id="note" className="text-secondary d-none d-xl-flex">
              <small>Semillero de Investigación Green Clouds</small>
            </div>
            <div className="top-link">
              <a
                href="https://m.facebook.com/people/Semillero-Green-Clouds/100073527546722/"
                className="btn-light nav-fill btn btn-square rounded-circle me-2">
                <i className="fab fa-facebook-f text-primary"></i>
              </a>
              <a
                href="https://www.instagram.com/semillero_green_clouds/"
                className="btn-light nav-fill btn btn-square rounded-circle me-2">
                <i className="fab fa-instagram text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-success">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg py-0">
            {/*<Link to="/" className="navbar-brand">
              <h1 className="text-white fw-bold d-block">
                Green <span className="text-warning">Clouds</span>{" "}
              </h1>
            </Link>*/}
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-transparent"
              id="navbarCollapse">
              <div className="navbar-nav ms-auto mx-xl-auto p-0">
                <Link
                  to="/"
                  className="nav-item nav-link active text-secondary">
                  Green Clouds
                </Link>
                <div className="nav-item dropdown">
                  <a
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown">
                    Proyectos
                  </a>
                  <div className="dropdown-menu rounded">
                    <Link to="/proyectos-propuesta" className="dropdown-item">
                      Propuestas
                    </Link>
                    <Link to="/proyectos-encurso" className="dropdown-item">
                      En Curso
                    </Link>
                    <Link to="/proyectos-finalizados" className="dropdown-item">
                      Finalizados
                    </Link>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown">
                    Participaciones
                  </Link>
                  <div className="dropdown-menu rounded">
                    <Link
                      to="/participaciones-eventos"
                      className="dropdown-item">
                      Eventos
                    </Link>
                    <Link
                      to="/participaciones-publicaciones"
                      className="dropdown-item">
                      Publicaciones
                    </Link>
                  </div>
                </div>
                {/*
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown">
                    Equipo
                  </Link>
                  <div className="dropdown-menu rounded">
                    <Link to="/equipo-coordinacion" className="dropdown-item">
                      Coordinación
                    </Link>
                    <Link to="/equipo-integrantes" className="dropdown-item">
                      Semilleristas
                    </Link>
                  </div>
                </div>
          
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown">
                    Sobre Nosotros
                  </Link>
                  <div className="dropdown-menu rounded">
                    <Link
                      to="/sobrenosotros-presentacion"
                      className="dropdown-item">
                      Presentación
                    </Link>
                    <Link
                      to="/sobrenosotros-reseñahistorica"
                      className="dropdown-item">
                      Reseña Historica
                    </Link>
                    <Link
                      to="/sobrenosotros-lineasdeinvestigacion"
                      className="dropdown-item">
                      Lineas de Investigación
                    </Link>
                  </div>
                </div>
          */}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div
        className="container-fluid bg-dark footer wow fadeIn"
        data-wow-delay=".3s">
        <div className="container pt-5 pb-4">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <Link to="index.html">
                <h1 className="text-white fw-bold d-block">
                  Green <span className="text-warning">Clouds</span>{" "}
                </h1>
              </Link>
              <p className="mt-4 text-light">
                Semillero de Investigación del Programa de Ingeniería de
                Sistemas. Facultad de Ingeniería, Universidad de Nariño
              </p>
              <div className="d-flex hightech-link">
                <a
                  href="https://m.facebook.com/people/Semillero-Green-Clouds/100073527546722/"
                  className="btn-light nav-fill btn btn-square rounded-circle me-2">
                  <i className="fab fa-facebook-f text-primary"></i>
                </a>
                <a
                  href="https://www.instagram.com/semillero_green_clouds/"
                  className="btn-light nav-fill btn btn-square rounded-circle me-2">
                  <i className="fab fa-instagram text-primary"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mt-4 d-flex flex-column short-link">
                <Link to="/proyectos" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Proyectos
                </Link>
                <Link to="/participaciones" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Participaciones
                </Link>
                {/*
                <Link to="/equipo" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Equipo
                </Link>
                <Link to="/sobrenosotros" className="mb-2 text-white">
                  <i className="fas fa-angle-right text-secondary me-2"></i>
                  Sobre Nosotros
                </Link>
        */}
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <a to="#" className="h3 text-secondary">
                Contactos
              </a>
              <div className="text-white mt-4 d-flex flex-column contact-link">
                <a
                  to="#"
                  className="pb-3 text-light border-bottom border-primary">
                  <i className="fas fa-map-marker-alt text-secondary me-2"></i>{" "}
                  Calle 1 No. 3 – 81 La Floresta Ipiales, Nariño
                </a>
                <a
                  to="#"
                  className="py-3 text-light border-bottom border-primary">
                  <i className="fas fa-phone-alt text-secondary me-2"></i> +57
                  310 527 37 27
                </a>
                <a
                  to="#"
                  className="py-3 text-light border-bottom border-primary">
                  <i className="fas fa-envelope text-secondary me-2"></i>{" "}
                  greenclouds@udenar.edu.co
                </a>
              </div>
            </div>
          </div>
          <hr className="text-light mt-5 mb-4" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <span className="text-light">
                <a to="#" className="text-secondary">
                  <i className="fas fa-copyright text-secondary me-2"></i>Green
                  Clouds
                </a>
                , Universidad de Nariño - Sede Regional Ipiales.
              </span>
            </div>
            {/*<div className="col-md-6 text-center text-md-end">
              <span className="text-light">
                Designed By
                <a to="https://htmlcodex.com" className="text-secondary">
                  HTML Codex
                </a>{" "}
                Distributed By <a to="https://themewagon.com">ThemeWagon</a>
              </span>
            </div>
*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default BarraNavegacion;
