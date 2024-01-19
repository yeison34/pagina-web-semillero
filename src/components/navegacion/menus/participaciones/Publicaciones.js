import React from "react";
import "../../../../lib/animate/animate.min.css";
import "../../../../lib/owlcarousel/assets/owl.carousel.min.css";

import "jquery";

import "../../../../lib/wow/wow.js";
import "../../../../lib/wow/wow.min.js";

import "../../../../lib/easing/easing.min.js";
import "../../../../lib/waypoints/waypoints.min.js";

import "../../../../lib/owlcarousel/owl.carousel.min.js";

import WOW from "wow.js";
import "../../../../js/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../css/style.css";

import analisiweb2 from "../../../../img/proyectos/ANALISISWEB2.0/foto2.jpg";
import yuli from "../../../../img/semilleristas/yuli.jpg";
import { BsFiletypePdf } from "react-icons/bs";

function Publicaciones() {
  return (
    <>
      <div className="container pt-5">
        <div class="title-area" style={{ textAlign: "center" }}>
          <h2>Publicaciones</h2>
          <div class="separator separator-success">✻</div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="row g-5">
          <h4
            className="mb-4"
            style={{ textAlign: "justify", fontWeight: "bold" }}>
            Análisis del uso y aplicación de las herramientas de la Web 2.0
            tanto en docentes como en estudiantes del programa de Ingeniería de
            Sistemas de la Universidad de Nariño, Sede Ipiales durante el
            periodo de contingencia generado por el Covid19.
          </h4>
          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <p style={{ textAlign: "justify", fontWeight: "bold" }}>
              Shirley Meliza Gómez
            </p>
            <p>Ingeniería de Sistemas, Universidad de Nariño</p>
            <p style={{ textAlign: "justify", fontWeight: "bold" }}>
              Nancy Milena Cuastumal Quenguan
            </p>
            <p>Ingeniería de Sistemas, Universidad de Nariño</p>
            <p style={{ textAlign: "justify", fontWeight: "bold" }}>
              Ingrid Catheryn Cabrera
            </p>
            <p>Ingeniería de Sistemas, Universidad de Nariño</p>
            <br></br>
            <p>
              <b>Palabras Clave:</b> Covid19, Docentes, Educación, Estudiantes,
              Herramientas de la web 2.0.
            </p>
            <br></br>
            <br></br>
            <p>
              <b>Resumen</b>
            </p>
            <br></br>
            <p style={{ textAlign: "justify" }}>
              Las herramientas de la web 2.0 son indispensables en el contexto
              actual, gracias a la cantidad de recursos que poseen, permiten
              compartir información fácilmente en tiempo real y se caracterizan
              por la creación de ambientes colaborativos. Durante la
              contingencia generada por el Covid-19 los estudiantes y docentes
              se vieron obligados a emplearlas. El propósito de la investigación
              es analizar el uso y aplicación de las herramientas de la web 2.0
              tanto en docentes como en estudiantes del Programa de Ingeniería
              de Sistemas - sede Ipiales durante el periodo de contingencia
              generado por el Covid19. En la metodología se va a trabajar con el
              enfoque cuantitativo involucrando a los docentes y estudiantes del
              programa de ingeniería de sistemas sede Ipiales. Se pretende
              resaltar las ventajas, desventajas, herramientas más empleadas en
              las metodologías en las aulas virtuales, además conocer como fue
              el impacto de no contar con clases presenciales en la universidad.
            </p>
          </div>
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={analisiweb2}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "5%", height: "300px", width: "300px" }}
              />
              <p>
                <b>Eventos</b>
              </p>
              <p>
                <b>CICOM 2021</b>
              </p>
              <p>Publicado:</p>
              <p></p>
              <p>Pag. 145 -149</p>
              <a href="" className="btn-light nav-fill btn btn-square me-4">
                <BsFiletypePdf></BsFiletypePdf>
              </a>
              <br></br>
              <br></br>
              <p>
                <b>
                  XVII Encuentro Institucional Semilleros de Investigación - II
                  Encuentro Internacional de Formación con la investigación
                </b>
              </p>
              <p>Publicado:</p>
              <p></p>
              <p>Pag. 16-23</p>
              <a
                href="https://fundacionlasirc.org/images/Revista/REVISTALASIRCVolumen2.No.5.pdf"
                className="btn-light nav-fill btn btn-square me-4">
                <BsFiletypePdf></BsFiletypePdf>
              </a>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="separator separator-success">✻</div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="row g-5">
          <h4
            className="mb-4"
            style={{ textAlign: "justify", fontWeight: "bold" }}>
            Análisis de los componentes relacionados en programación
            competitiva: un mapeo sistemático de literatura
          </h4>
          <div
            className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".5s">
            <p style={{ textAlign: "justify", fontWeight: "bold" }}>
              Yuli Esmeralda Sinza Díaz
            </p>
            <p>Ingeniería de Sistemas, Universidad de Nariño</p>
            <p style={{ textAlign: "justify", fontWeight: "bold" }}>
              Stefania Caipe
            </p>
            <p>Ingeniería de Sistemas, Universidad de Nariño</p>

            <br></br>
            <p>
              <b>Palabras Clave:</b> Marco de trabajo, maratones de
              programación, programación competitiva, plataforma de
              entrenamiento
            </p>
            <br></br>
            <br></br>
            <p>
              <b>Resumen</b>
            </p>
            <br></br>
            <p style={{ textAlign: "justify" }}>
              La programación competitiva se aborda como un deporte mental en el
              que los participantes resuelven problemas algorítmicos y
              matemáticos mediante la programación. El objetivo principal de
              este artículo es determinar las características y elementos
              necesarios para el entrenamiento en programación competitiva, a
              través de un mapeo sistemático de la literatura basado en el
              protocolo de Petersen, Feldt y otros. Se identificaron un total de
              128 estudios, de los cuales se seleccionaron 17 para el análisis
              de información, siguiendo el proceso descrito en el presente
              documento. Como resultado, se logra conocer los aspectos
              relevantes relacionados con la programación competitiva y su
              aprendizaje, incluyendo conceptos como jueces, plataformas,
              veredictos, tipos de ejercicios, metodologías aplicadas y la
              importancia de la práctica y participación en competencias de
              programación. Estas investigaciones permitieron responder a seis
              interrogantes planteados, concluyendo la importancia de establecer
              un marco de trabajo para el entrenamiento en programación
              competitiva.
            </p>
          </div>
          <div
            className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
            data-wow-delay=".3s">
            <div className="h-100 position-relative">
              <img
                src={yuli}
                className="img-fluid rounded"
                alt=""
                style={{ marginBottom: "5%", height: "300px", width: "300px" }}
              />
              <p>
                <b>Eventos</b>
              </p>
              <p>
                <b>
                  Análisis de los componentes relacionados en programación
                  competitiva: un mapeo sistemático de literatura
                </b>
              </p>
              <p>Publicado:</p>
              <p>2023-08-30</p>
              <a
                href="https://revistas.elpoli.edu.co/index.php/pol/article/view/2154/2197"
                className="btn-light nav-fill btn btn-square me-4">
                <BsFiletypePdf></BsFiletypePdf>
              </a>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default Publicaciones;
