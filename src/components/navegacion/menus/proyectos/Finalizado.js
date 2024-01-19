import React from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";

//imagenes analisiweb2.0
import analisiweb1 from "../../../../img/proyectos/ANALISISWEB2.0/foto1.jpg";
import analisiweb2 from "../../../../img/proyectos/ANALISISWEB2.0/foto2.jpg";

//imagenes analisisprogramacion
import analisisprogramacion1 from "../../../../img/proyectos/ANALISISPROGRAMACION/foto1.jpg";
import analisisprogramacion2 from "../../../../img/proyectos/ANALISISPROGRAMACION/foto2.jpg";

//imagenes estrategiadidactica
import estrategiadidactica1 from "../../../../img/proyectos/ESTRATEGIADIDACTICA/foto1.jpg";
import estrategiadidactica2 from "../../../../img/proyectos/ESTRATEGIADIDACTICA/foto2.jpg";

//imagenes travelprov
//import travelprov1 from "../../../../img/proyectos/TRAVELPROV/foto1.jpg";
//import travelprov2 from "../../../../img/proyectos/TRAVELPROV/foto2.jpg";
import { useState, useEffect } from "react";
import ModalDef from "../general/Generarlmodal.js";
import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";
function Finalizado() {
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
      {/*Primer proyecto Finalizado */}

      <div className="container pt-5">
        <div class="title-area" style={{ textAlign: "center" }}>
          <h3>Finalizados</h3>
          <div class="separator separator-success">✻</div>
        </div>
        <br></br>
        <br></br>
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={analisiweb1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%", height: "300px", width: "300px" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={analisiweb2}
                  style={{
                    marginBottom: "25%",
                    height: "300px",
                    width: "300px",
                  }}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              Análisis del uso y aplicación de las herramientas de la Web 2.0
              tanto en docentes como en estudiantes del programa de Ingeniería
              de Sistemas de la Universidad de Nariño, Sede Ipiales durante el
              periodo de contingencia generado por el Covid19.
            </h4>
          </div>
          <center>
            <button
              style={{ width: "100px" }}
              className="btn btn-success"
              onClick={() =>
                abrirModal(
                  "Análisis del uso y aplicación de las herramientas de la Web 2.0",
                  "Las herramientas de la web 2.0 son indispensables en el contexto actual," +
                    "gracias a la cantidad de recursos que poseen, permiten compartir información " +
                    "fácilmente en tiempo real y se caracterizan por la creación de ambientes" +
                    "colaborativos. Durante la contingencia generada por el Covid-19 los estudiantes" +
                    "y docentes se vieron obligados a emplearlas. El propósito de la investigación" +
                    "es analizar el uso y aplicación de las herramientas de la web 2.0 tanto en" +
                    "docentes como en estudiantes del Programa de Ingeniería de Sistemas - sede" +
                    "Ipiales durante el periodo de contingencia generado por el Covid19. En" +
                    "la metodología se va a trabajar con el enfoque cuantitativo involucrando" +
                    "a los docentes y estudiantes del programa de ingeniería de sistemas sede" +
                    "Ipiales. Se pretende resaltar las ventajas, desventajas, herramientas" +
                    "más empleadas en las metodologías en las aulas virtuales, además conocer" +
                    "como fue el impacto de no contar con clases presenciales en la universidad.",
                  "",
                )
              }>
              Ver Mas
            </button>
          </center>
        </div>
      </div>

      {/*fin Primer proyecto Finalizado */}
      <br></br>
      <br></br>
      <br></br>
      {/*segundo proyecto Finalizado */}
      <div class="separator separator-success">✻</div>
      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={analisisprogramacion1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%", height: "300px", width: "300px" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={analisisprogramacion2}
                  style={{
                    marginBottom: "25%",
                    height: "300px",
                    width: "300px",
                  }}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              Análisis del aporte de las asignaturas de programación de
              Ingeniería de Sistemas de la Universidad de Nariño en programación
              competitiva
            </h4>
          </div>
          <center>
            <button
              style={{ width: "100px" }}
              className="btn btn-success"
              onClick={() =>
                abrirModal(
                  "Análisis del aporte de las asignaturas de programación de Ingeniería de Sistemas de la Universidad de Nariño en programación competitiva",
                  "El presente proyecto pretende analizar el contenido de las asignaturas relacionadas con la rama de programación en Ingeniera de sistemas de la Universidad de Nariño para determinar el aporte de estas en programación competitiva. La programación competitiva se ha vuelto muy importante hoy en día ya que incorpora otra forma de solucionar" +
                    "ejercicios, adoptando una visión mucho más dinámica y critica y añadiendo una variable" +
                    "externa relacionada con el tiempo. Es por esto que el proyecto se basará en una" +
                    "investigación de campo, la cual permitirá realizar el análisis de las temáticas de las" +
                    "asignaturas de programación, la metodología impartida por los docentes y la implantación" +
                    "de tópicos relacionados con programación competitiva dentro del proceso académico." +
                    "Finalmente, como efectos esperados se estima que se cuente con un mayor número de " +
                    "estudiantes interesados hacia la programación competitiva y que a su vez se disminuya el" +
                    "trabajo extra que se tenga que hacer para la adquisición o el mejoramiento de habilidades" +
                    "hacia este tema, así mismo se aumentaría la participación de la universidad en este tipo " +
                    "de competencias las cuales contribuyen al reconocimiento de la institución a nivel regional" +
                    "y nacional.",
                  "",
                )
              }>
              Ver Mas
            </button>
          </center>
        </div>
      </div>

      {/*fin segundo proyecto Finalizado */}
      <br></br>
      <br></br>
      <br></br>
      {/*tercer proyecto Finalizado */}
      <div class="separator separator-success">✻</div>
      <div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={estrategiadidactica1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute "
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={estrategiadidactica2}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              Estrategia didáctica mediada con TIC para incentivar los procesos
              de lectura en la biblioteca pública rural “Juan Lorenzo Quenguan"
              del municipio de Ipiales.
            </h4>
          </div>
          <center>
            <button
              style={{ width: "100px" }}
              className="btn btn-success"
              onClick={() =>
                abrirModal(
                  "Estrategia didáctica mediada con TIC para incentivar los procesos de lectura en la biblioteca pública rural 'Juan Lorenzo Quenguan' del municipio de Ipiales.",
                  "La integración de las TIC en los procesos de lectura fortalece las habilidades del ser humano, contribuyen" +
                    "a mejorar la calidad en la educación y permite también disminuir la desigualdad y exclusión en las zonas" +
                    "rurales." +
                    "La presente investigación efectuará un diagnóstico y se diseñará una estrategia didáctica mediada con" +
                    "TIC para el mejoramiento en los procesos de lectura en las Bibliotecas Públicas rurales del municipio de" +
                    "Ipiales, la cual se trabajará con un enfoque cuantitativo de tipo descriptiva. El estudio permitirá detallar con" +
                    "ayuda de las TIC que se puede consolidar una estrategia didáctica que mejore los procesos de lectura en" +
                    "los usuarios de las bibliotecas rurales con el fin de generar espacios más creativos, novedosos y dinámicos" +
                    "que despierten la atención y la motivación por leer, de tal manera que ellos tengan acceso a nuevas formas" +
                    "de comprender diferentes textos, y se fortalezca esta habilidad comunicativa, utilizando los recursos que" +
                    "ofrecen estas herramientas. ",
                  "",
                )
              }>
              Ver Mas
            </button>
          </center>
        </div>
      </div>

      {/*fin tercer proyecto Finalizado */}
      <br></br>
      <br></br>
      <br></br>
      {/*cuarto proyecto Finalizado */}

      {/*<div className="container pt-5">
        <div className="row g-5">
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={travelprov1}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "25%" }}
              />
              <div
                className="position-absolute"
                style={{ top: "30%", left: "35%" }}>
                <img
                  src={travelprov2}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <h4
              className="mb-4"
              style={{ textAlign: "justify", fontWeight: "bold" }}>
              TRAVELPROV: Plataforma web para la difusión turística del
              municipio de Providencia, Nariño mediante herramientas y
              estrategias de marketing digital
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur quis purus ut interdum. Pellentesque aliquam dolor eget
              urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus,
              ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida
              eros. Proin scelerisque quam nec elementum viverra. Suspendisse
              viverra hendrerit diam in tempus. Etiam gravida justo nec erat
              vestibulum, et malesuada augue laoreet.
            </p>
            <p className="mb-4">
              Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam
              volutpat libero sit amet leo cursus, ac viverra eros tristique.
              Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam
              nec elementum viverra. Suspendisse viverra hendrerit diam in
              tempus.
            </p>
            <a
              href=""
              className="btn btn-success rounded-pill px-5 py-3 text-white">
              Ver Mas
            </a>
          </div>
        </div>
      </div>
                */}
      {/*fin cuarto proyecto Finalizado */}
      {modalIsOpen && (
        <ModalDef
          titulo={modalText.titulo}
          body={modalText.body}
          imagen={modalText.imagen}
          onClose={cerrarModal}
          onOpen={modalIsOpen}
        />
      )}
    </>
  );
}

export default Finalizado;
