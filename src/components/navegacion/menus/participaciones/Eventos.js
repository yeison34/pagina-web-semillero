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
      <div class="container-fluid services py-5 mb-5">
        <div class="container">
          <div
            class="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}>
            <div class="title-area" style={{ textAlign: "center" }}>
              <h2>Eventos</h2>
              <div class="separator separator-success">✻</div>
            </div>
          </div>
          <div class="row g-5 services-inner">
            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div class="services-item bg-light">
                <div class="p-4 text-center services-content">
                  <div class="services-content-icon">
                    <img
                      class="mb-4"
                      src={Udenar}
                      style={{ height: "150px", width: "150px" }}></img>

                    <p class="mb-4">
                      Encuentros Instititucionales de Semilleros de
                      Investigación
                    </p>

                    <p class="mb-4">Organizados por</p>
                    <p class="mb-4">Universidad de Nariño</p>
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
            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div class="services-item bg-light">
                <div class="p-4 text-center services-content">
                  <div class="services-content-icon">
                    <img
                      class="mb-4"
                      src={Redcolsi}
                      style={{ height: "150px", width: "150px" }}></img>

                    <p class="mb-4">
                      Encuentros Departamentales de Semilleros de Investigación
                      2020
                    </p>
                    <p class="mb-4">Organizado Por</p>
                    <p class="mb-4">REDCOLSI</p>
                    <button
                      onClick={() =>
                        abrirModal("Encuentros Internacionales", "3")
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

            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div class="services-item bg-light">
                <div class="p-4 text-center services-content">
                  <div class="services-content-icon">
                    <img
                      class="mb-4"
                      src={Udistrital}
                      style={{ height: "150px", width: "150px" }}></img>

                    <p class="mb-4">CONGRESOS INTERNACIONALES</p>
                    <p class="mb-4">CICOM</p>
                    <p class="mb-4">Universidad Distrital</p>
                    <button
                      onClick={() =>
                        abrirModal("Encuentros Internacionales", "2")
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
            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div class="services-item bg-light">
                <div class="p-4 text-center services-content">
                  <div class="services-content-icon">
                    <img
                      class="mb-4"
                      src={Cacied}
                      style={{ height: "150px", width: "150px" }}></img>
                    <p class="mb-4">CONGRESOS ANDINOS</p>
                    <p class="mb-4">CACIED</p>
                    <p class="mb-4">Universidad de Nariño, Mariana y Cesmag</p>

                    <button
                      onClick={() =>
                        abrirModal("Encuentros Internacionales", "4")
                      }
                      href=""
                      class="btn text-white px-5 py-3 rounded-pill"
                      style={{ background: "black" }}>
                      Ver Mas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
