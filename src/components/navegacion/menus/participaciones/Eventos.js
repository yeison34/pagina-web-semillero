import React from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Carousel from "react-multi-carousel";
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

//eventos udenar
import Udenar from "../../../../img/general/udenar.png";
import Redcolsi from "../../../../img/general/redcolsi.png";
import Redis from "../../../../img/general/redis.png";
import Unad from "../../../../img/general/unad.png";
import Unimar from "../../../../img/general/unimar.png";
import Udistrital from "../../../../img/general/udistrital.png";
import UdenarUnimarCesmag from "../../../../img/general/unimar-udenar-cesmag.png";
import Cesmag from "../../../../img/general/cesmag.png";
import Catolica from "../../../../img/general/catolica.png";
import Kenta from "../../../../img/general/kenta.png";
import Cacied from "../../../../img/general/cacied.png";
import Cacied2023 from "../../../../img/general/cacied2023.png";
import ModalEventos from "./Eventosmodal.js";
import ModalEventos3 from "./Eventosmodal1.js";
import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
function Eventos() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [modalText, setModalText] = useState({
    titulo: "",
    imagen: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      width: "50%", // Ajusta el tamaño del contenido del modal según tus necesidades
      height: "70%", // Puedes ajustar también la altura si es necesario
      margin: "auto", // Centra el modal horizontalmente
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Ajusta la opacidad y el color del fondo del modal
    },
  };
  const abrirModal = (titulo, imagen) => {
    setModalText({ titulo, imagen });
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalText({ titulo: "", imagen: "" });
    setModalIsOpen(false);
  };
  return (
    <>
      <div class="title-area" style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "Acme, sans-serif" }}>Eventos</h2>
        <div class="separator separator-success">✻</div>
      </div>
      <div style={{ marginLeft: "50px" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          {/*primer evento*/}

          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Udenar}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        II Encuentro Instititucional de Semilleros de
                        Investigación Udenar 2020
                      </p>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        15 de Octubre de 2020
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad de Nariño
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin primer evento*/}
          {/*segundo evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Redcolsi}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Encuentro Departamental de Semilleros de Investigación
                        2020
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        29 -31 de Octubre de 2020
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        REDCOLSI
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin segundo evento*/}
          {/*tercer evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Redis}
                        style={{ height: "150px", width: "300px" }}></img>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Encuentro academico Nodo Sur Occidente REDIS -
                        Expoposter 2020
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        4 - 6 de Noviembre de 2020
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        REDIS - Expoposter
                      </p>

                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin tercer evento*/}
          {/*cuarto evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Unad}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        V Encuentro Zonal de Semilleros de Investigación
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        27 -28 Mayo de 2021
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        UNAD
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin cuarto evento*/}
          {/*quinto evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Unimar}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        XVII Encuentro Institucional Semilleros de Investigación
                        - II Encuentro Internacional de Formación con la
                        investigación
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        14 - 16 Abril de 2021
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad Mariana
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin quinto evento*/}
          {/*sexto evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Udenar}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        III Encuentro Instititucional de Semilleros de
                        Investigación Udenar 2021
                      </p>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        26 Agosto de 2021
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad de Nariño
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin sexto evento*/}
          {/*septimo evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Redcolsi}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        XVIII Encuentro Departamental de Semilleros de
                        Investigación y II Encuentro Internacional de formación
                        para la investigación REDCOLSI NARIÑO 2021
                      </p>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        1- 3 de Septiembre de 2021
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        REDCOLSI
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin septimo evento*/}
          {/*octavo evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Udistrital}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        XI CONGRESO INTERNACIONAL DE COMPUTACIÓN CICOM 2021
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        20 al 22 de octubre de 2021
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad Distrital
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin octavo evento*/}
          {/*noveno evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Cacied}
                        style={{ height: "150px", width: "150px" }}></img>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        CONGRESO ANDINO COMPUTACIÓN, INFORMÁTICA Y EDUCACIÓN
                        CACIED 2021
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        3,4 y 5 de Noviembre 2021
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad de Nariño, Mariana y Cesmag
                      </p>

                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin noveno evento*/}
          {/*decimo evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Udenar}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        IV ENCUENTRO INSTITUCIONAL DE SEMILLEROS DE
                        INVESTIGACIÓN SEMESTRE B – 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        6 y 7 DE ABRIL DEL 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad de Nariño
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimo evento*/}
          {/*decimoprimer evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Redcolsi}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        XIX Encuentro Departamental de Semilleros de
                        Investigación REDCOLSI NARIÑO 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        18, 19 Y 20 de mayo del 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        REDCOLSI
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimoprimer evento*/}
          {/*decimosegundo evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Redcolsi}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        XXV Encuentro Nacional y XIX Encuentro Internacional de
                        Semilleros de Investigación fundación REDCOLSI.
                      </p>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        12 al 15 de octubre del 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Redcolsi
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimosegundo evento*/}
          {/*decimotercer evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Redcolsi}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        XIX Encuentro Departamental de Semilleros de
                        Investigación REDCOLSI NARIÑO 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        18, 19 Y 20 de mayo del 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        REDCOLSI
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimotercer evento*/}
          {/*decimocuarto evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Redcolsi}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        XIX Encuentro Departamental de Semilleros de
                        Investigación REDCOLSI NARIÑO 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        12 al 15 de octubre del 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        REDCOLSI
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimocuarto evento*/}
          {/*decimoquinto evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Cesmag}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Primer Encuentro Internacional de Semilleros de
                        Investigación ESIC 2022: Transformando realidades de los
                        nuevos tiempos.
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        08 y 09 de noviembre de 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad CESMAG
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimoquinto evento*/}
          {/*decimosexto evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Udenar}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        V ENCUENTRO INSTITUCIONAL DE SEMILLEROS DE INVESTIGACIÓN
                        SEMESTRE B – 2022
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        26-27 de abril 2023
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad de Nariño
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimosexto evento*/}
          {/*decimoseptimo evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Redcolsi}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        XX Encuentro Departamental de Semilleros de
                        Investigación y IV Encuentro Internacional de formación
                        para la investigación REDCOLSI- Nodo Nariño
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        17,18 y 19 de mayo de 2023
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad Catolica del Sur Nariño
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimoseptimo evento*/}
          {/*decimooctavo evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Kenta}
                        style={{ height: "150px", width: "200px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Congreso Internacional de Semilleros de
                        Investigación-Educación-Tecnología- CISIET 2023
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        4 al 6 de octubre de 2023
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Grupo KENTA
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimooctavo evento*/}
          {/*decimonoveno evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Cesmag}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Segundo encuentro internacional de semilleros de
                        investigación - ESIC 2023
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        30 y 31 de agosto de 2023
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad CESMAG
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin decimonoveno evento*/}
          {/*vigesimo evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Redcolsi}
                        style={{ height: "150px", width: "150px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        XXVI Encuentro Nacional y XXI Encuentro Internacional de
                        Semilleros de Investigación fundación REDCOLSI.
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        11 al 14 de octubre de 2023
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        REDCOLSI
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin vigesimo evento*/}
          {/*vigesimoprimero evento*/}
          <div>
            <div
              class="card card-member"
              style={{ height: "500px", width: "350px" }}>
              <div class="content">
                <div class="services-item bg-light">
                  <div class="p-4 text-center services-content">
                    <div class="services-content-icon">
                      <img
                        class="mb-4"
                        src={Cacied2023}
                        style={{ height: "150px", width: "200px" }}></img>

                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Sexto CONGRESO ANDINO COMPUTACIÓN, INFORMÁTICA Y
                        EDUCACIÓN CACIED 2023
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        8 al 10 de noviembre 2023
                      </p>
                      <p
                        style={{ fontFamily: "Acme, sans-serif" }}
                        class="mb-4">
                        Universidad de Nariño, Mariana y Cesmag
                      </p>
                      <button
                        onClick={() =>
                          abrirModal("Encuentros Intitucionales", "1")
                        }
                        style={{ background: "black" }}
                        href=""
                        class="btn btn-secondary text-white px-5 py-3 rounded-pill">
                        Ver Mas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*fin vigesimoprimero evento*/}
        </Carousel>
      </div>
      {modalIsOpen && (
        <ModalEventos
          titulo={modalText.titulo}
          imagen={modalText.imagen}
          onClose={cerrarModal}
          onOpen={modalIsOpen}
        />
      )}
    </>
  );
}

export default Eventos;
