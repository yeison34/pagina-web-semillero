import React from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";

import { RiComputerLine } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import ModalDef from "../general/Generarlmodal.js";

function Lineasinvestigacion() {
  const [modalText, setModalText] = useState({
    titulo: "",
    body: "",
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
  const abrirModal = (titulo, body, imagen) => {
    setModalText({ titulo, body, imagen });
    setModalIsOpen(true);
  };

  const cerrarModal = () => {
    setModalText({ titulo: "", body: "", imagen: "" });
    setModalIsOpen(false);
  };
  return (
    <>
      <br></br>
      <br></br>
      <div className="wow fadeIn" data-wow-delay=".3s">
        <div class="title-area" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Acme, sans-serif" }}>
            Lineas de Investigación
          </h2>
          <div class="separator separator-success">✻</div>
        </div>
        <div style={{ padding: "10px" }}>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Questrial, sans-serif",
                }}>
                Las líneas de investigación del Semillero, se definen teniendo
                en cuenta las disciplinas propuestas por ACM, IEEE-CS y AIS en
                el documento Currículo de la Computación del año 2005.
              </p>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-2">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RiComputerLine size={100}></RiComputerLine>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ fontFamily: "Acme, sans-serif" }}>
                Ingenieria de Software
              </p>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ width: "100px", background: "green", color: "white" }}
                className="btn btn-success"
                onClick={() =>
                  abrirModal(
                    "Ingenieria de Software",
                    "La Ingeniería de Software es la disciplina enfocada al diseño, construcción y mantenimiento de sistemas basados en software. Su principal preocupación es la concepción de software confiable, eficiente, escalable y de fácil mantenimiento a través de su clara documentación del diseño, desarrollo y despliegue. Enfoca sus esfuerzos hacia el análisis de requerimientos, el diseño, la implementación y despliegue de los sistemas software persiguiendo procesos formalmente definidos de desarrollo y documentación.",
                    "1",
                  )
                }>
                Ver Mas
              </button>
            </div>
          </div>
          <div className="col-sm-2">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FaCloudDownloadAlt size={100}></FaCloudDownloadAlt>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ fontFamily: "Acme, sans-serif" }}>
                Ciencias de la Computación
              </p>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ width: "100px", background: "green", color: "white" }}
                className="btn btn-success"
                onClick={() =>
                  abrirModal(
                    "Ciencias de la Computación",
                    "La Ciencia en Computación expande un amplio rango sobre la fundamentación teórica derivada de la lógica matemática y la matemática discreta. Se centra principalmente en el campo de la algoritmia que repercute significativamente en desarrollos orientados a los sistemas inteligentes, la robótica, la visión artificial, la biología computacional, entre otras muchas áreas del conocimiento. Su enfoque es mucho más teórico que las otras disciplinas relacionadas a la Computación.",
                    "2",
                  )
                }>
                Ver Mas
              </button>
            </div>
          </div>
          <div className="col-sm-2">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FaDatabase size={100}></FaDatabase>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ fontFamily: "Acme, sans-serif" }}>
                Sistemas de Información
              </p>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ width: "100px", background: "green", color: "white" }}
                className="btn btn-success"
                onClick={() =>
                  abrirModal(
                    "Sistemas de Información",
                    "Esta disciplina se enfoca principalmente en las soluciones de integración de tecnología de información y los procesos en el mundo de los negocios y las organizaciones. El estudio de los procesos en el mundo empresarial es pieza fundamental para el desarrollo de sistemas computacionales que respondan a las metas, objetivos y estrategias organizacionales. Su énfasis está en el tratamiento adecuado de la información. Las bases y bodegas de datos son elementos fundamentales para la construcción de instrumentos de apoyo a la inteligencia de negocios.",
                    "3",
                  )
                }>
                Ver Mas
              </button>
            </div>
          </div>

          <div className="col-sm-2">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <BsGraphUpArrow size={100}></BsGraphUpArrow>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ fontFamily: "Acme, sans-serif" }}>
                Tecnologías de la Información
              </p>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ width: "100px", background: "green", color: "white" }}
                className="btn btn-success"
                onClick={() =>
                  abrirModal(
                    "Tecnologías de la Información",
                    "La Tecnología de Información es el complemento principal para los Sistemas de Información. Su enfoque eminentemente práctico en el campo de la instalación, configuración, afinamiento, despliegue y administración de sistemas computacionales permite que los sistemas de información funcionen adecuadamente. Su enfoque principal se desarrolla en el campo de las redes computacionales, la administración de la seguridad, el afinamiento de sistemas y la planeación de los ciclos de vida de la tecnología computacional a nivel organizacional junto con las estrategias de actualización permanente.",
                    "4",
                  )
                }>
                Ver Mas
              </button>
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
      {modalIsOpen && (
        <ModalDef
          titulo={modalText.titulo}
          body={modalText.body}
          imagen={modalText.imagen}
          onClose={cerrarModal}
          onOpen={modalIsOpen}
        />
      )}
      <br></br>
      <br></br>
    </>
  );
}

export default Lineasinvestigacion;
